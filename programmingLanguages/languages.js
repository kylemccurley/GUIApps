const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

document.addEventListener('DOMContentLoaded', function() {
  var article = document.querySelector('article');
  loadContent();
  article.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName === 'A') {
      var p = target.parentNode.querySelector('p');
      var lang = target.parentNode.getAttribute('data-lang');
      var desc = findLanguage(lang).description;
      if (target.className.split(' ').includes('more')) {
        target.className = 'less';
        p.innerHTML = desc;
      } else {
        target.className = 'more';
        p.innerHTML = shortDescription(desc);
      }
    }
  })

  function loadContent() {
    languages.forEach((language) => {
      var name = language.name;
      var h1 = document.createElement('h1');
      var p = document.createElement('p');
      var a = document.createElement('a');
      var div = document.createElement('div');
      div.setAttribute('data-lang', name);
      p.innerHTML = shortDescription(language.description);
      a.className = 'more';
      h1.innerHTML = name;
      div.append(h1, p, a);
      article.append(div);
    });
  }

  function findLanguage(target) {
    return languages.filter(function(lang) {
             return lang.name === target; 
           })[0];
  }

  function shortDescription(desc) {
    return desc.substr(0, 120) + ' ...';
  }
})