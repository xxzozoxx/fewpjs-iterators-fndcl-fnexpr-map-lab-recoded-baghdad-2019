let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased (tutorials){
 tutorials = tutorials.map(function(v){
  let newTutorials=[];
  let arr = v.toLowerCase().split(' ');
  for(let i=0; i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
     newTutorials = arr.join(' ');
  }
  return (tutorials = newTutorials);
  });
  return tutorials;
}



