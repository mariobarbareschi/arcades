// Directory rendering and IRIS links share the same membership data.
(function () {
  'use strict';
  const groups = window.ARCADES_PEOPLE || [];
  const people = groups.flatMap(group => group.people);
  const byId = new Map(people.map(person => [person.id, person]));
  const currentMembers = groups.filter(group => group.id !== 'alumni').flatMap(group => group.people);

  function safeUrl(value) {
    if (!value) return null;
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  }

  function irisClause(person) {
    if (/^rp\d+$/.test(person.irisId || '')) return 'author_authority:' + person.irisId;
    return null;
  }

  function publicationsUrl(members = currentMembers) {
    const ids = [...new Set(members.map(person => person.irisId).filter(id => /^rp\d+$/.test(id || '')))];
    const clauses = ids.length ? ['author_authority:(' + ids.join(' OR ') + ')'] : [];
    if (!clauses.length) return null;
    const url = new URL('https://www.iris.unina.it/simple-search');
    url.searchParams.set('query', clauses.join(' OR '));
    url.searchParams.set('sort_by', 'dc.date.issued_dt');
    url.searchParams.set('order', 'DESC');
    url.searchParams.set('rpp', '20');
    return url.href;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function personCard(person, isPhd) {
    const url = safeUrl(person.personalUrl);
    const card = element(url ? 'a' : 'article', 'person' + (isPhd ? ' phd-person' : ''));
    card.dataset.personId = person.id;
    if (url) { card.href = url; card.target = '_blank'; card.rel = 'noopener noreferrer'; }
    const avatar = element('span', 'avatar' + (person.photo ? ' has-photo' : ''));
    if (person.photo) {
      const img = element('img');
      img.src = person.photo; img.alt = ''; img.loading = 'lazy';
      avatar.append(img);
    } else {
      avatar.textContent = person.name.split(/\s+/).filter(Boolean).map(word => word[0]).slice(0, 2).join('');
    }
    avatar.setAttribute('aria-hidden', 'true');
    const copy = element('span', isPhd ? 'phd-copy' : '');
    copy.append(element('b', '', person.name));
    if (isPhd) {
      const supervisor = byId.get(person.supervisorId);
      const details = [person.cycle ? 'Cycle ' + person.cycle : '', supervisor ? 'Supervisor ' + supervisor.name : ''].filter(Boolean);
      if (details.length) copy.append(element('small', '', details.join(' · ')));
      if (person.topic) copy.append(element('span', '', person.topic));
    }
    card.append(avatar, copy);
    if (url) { const arrow = element('i', '', '↗'); arrow.setAttribute('aria-hidden', 'true'); card.append(arrow); }
    return card;
  }

  const directory = document.getElementById('people-directory');
  if (directory) {
    for (const group of groups) {
      if (!group.people.length) continue;
      const wrapper = element('div', 'people-group reveal' + (group.id === 'phd' ? ' phd-group' : group.id === 'alumni' ? ' alumni-group' : ''));
      wrapper.append(element('h3', '', group.label));
      if (group.id === 'alumni') {
        const list = element('ul', 'alumni-list');
        for (const person of group.people) {
          const item = element('li');
          const url = safeUrl(person.personalUrl);
          if (url) {
            const link = element('a', '', person.name + ' ↗');
            link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; item.append(link);
          } else item.textContent = person.name;
          list.append(item);
        }
        wrapper.append(list);
      } else {
        const grid = element('div', group.id === 'phd' ? 'phd-grid' : 'people-grid');
        group.people.forEach(person => grid.append(personCard(person, group.id === 'phd')));
        wrapper.append(grid);
      }
      directory.append(wrapper);
    }
  }

  const allLink = document.getElementById('publications-iris');
  const url = publicationsUrl();
  if (allLink && url) allLink.href = url;
  const authorSelect = document.getElementById('publication-author');
  const authorLink = document.getElementById('publication-author-link');
  if (authorSelect && authorLink) {
    currentMembers.filter(person => irisClause(person)).forEach(person => {
      const option = element('option', '', person.name);
      option.value = person.id; authorSelect.append(option);
    });
    const updateAuthorLink = () => {
      const person = byId.get(authorSelect.value);
      authorLink.href = publicationsUrl(person ? [person] : currentMembers) || 'https://www.iris.unina.it/simple-search';
    };
    authorSelect.addEventListener('change', updateAuthorLink);
    updateAuthorLink();
  }
  // Exposed for local checks without making network requests in visitors' browsers.
  window.ArcadesDirectory = { currentMembers, irisClause, publicationsUrl };
})();
