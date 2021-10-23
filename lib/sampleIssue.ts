/* eslint-disable max-len */
import { IssueAPIResponse } from '../interfaces/api';

const SAMPLE_ISSUE_API_RESPONSE: IssueAPIResponse = {
  id: 1,
  dateOfPublishing: '2021-03-06',
  title: 'The Greatest issue of all time with twelve words and eleven spaces',
  description: `Something incredible is waiting to be known extraplanetary Jean-François Champollion Apollonius of Perga stirred by starlight rich in mystery. Take root and flourish laws of physics a billion trillion network of wormholes not a sunrise but a galaxyrise dispassionate extraterrestrial observer.`,
  imgURL: 'https://scriptified.dev/images/issue-1/issue-page-og.jpg',
  tipOfTheWeek: {
    id: 1,
    description: `Sometimes when I'm writing Javascript I want to throw up my hands and say "\`this\` is bullshit!" but I can never remember what "\`this\`" refers to.
    \n -[Ben](https://twitter.com/bendhalpern/status/578925947245633536?s=20) \n\n[Learn \`this\` in 100 seconds!](https://www.youtube.com/watch?v=YOlr79NaAtQ)`,
    sourceName: 'Ben',
    sourceURL: 'https://twitter.com/bendhalpern/status/578925947245633536?s=20',
    title: 'this is bullshit!',
    issue: 1,
    published_at: '2021-04-27T19:02:24.773Z',
    created_at: '2021-04-27T19:02:22.986Z',
    updated_at: '2021-05-01T08:19:33.721Z',
    codeSnippet: {
      id: 1,
      code: '#eminem {\n  word-spacing: 0;\n}',
      language: 'css',
      showLineNumbers: false,
    },
  },
  devOfTheWeek: {
    id: 1,
    name: 'I Am Devloper',
    profileImg: 'https://www.placecage.com/c/300/300',
    bio: 'just your friendly neighbourhood printer fixer',
    website: null,
    twitter: 'https://twitter.com/iamdevloper',
    github: null,
    youtube: null,
    linkedin: null,
    instagram: null,
    issue: 1,
    published_at: '2021-05-01T06:35:06.302Z',
    created_at: '2021-05-01T06:34:49.576Z',
    updated_at: '2021-05-22T20:02:09.015Z',
  },
  gif: {
    id: 1,
    gifURL: 'https://www.pexels.com/video/5377684/download/?search_query=coding&tracking_id=yablr33baca',
    caption: 'a random description about what makes this GIF so great',
    issue: 1,
    published_at: '2021-05-01T07:14:14.757Z',
    created_at: '2021-05-01T07:14:11.107Z',
    updated_at: '2021-05-22T19:22:39.035Z',
  },
  quiz: {
    id: 1,
    question: 'What is the output of the below snippet?',
    answerId: 1,
    issue: 1,
    published_at: '2021-05-01T07:21:23.254Z',
    created_at: '2021-05-01T07:21:17.911Z',
    updated_at: '2021-05-01T08:19:33.746Z',
    Option: [
      {
        id: 1,
        text: 'I have subscribed to Scriptified already!',
        description:
          '`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!',
        option_id: 1,
      },
      {
        id: 2,
        text: 'TypeError: not a function',
        description: "Okay maybe you're onto something! Keep trying",
        option_id: 2,
      },
      {
        id: 3,
        text: 'SyntaxError',
        description: 'Come on did you really think it would be that obvious :)',
        option_id: 3,
      },
      {
        id: 4,
        text: '`undefined`',
        description: "Now we both know you're just trying to mess with the options here.",
        option_id: 4,
      },
    ],
    CodeSnippet: {
      id: 6,
      code:
        'String.prototype.subscribeToScriptified = () => {\n  return "I have subscribed to Scriptified already!";\n};\nconst newsletter = "Scriptified";\nnewsletter.subscribeToScriptified();\n',
      language: 'javascript',
      showLineNumbers: false,
    },
  },
  published_at: '2021-04-27T19:13:48.109Z',
  created_at: '2021-04-27T19:13:46.284Z',
  updated_at: '2021-05-22T20:02:09.012Z',
  articles: [
    {
      id: 1,
      title: 'Brainfuck beware: JavaScript is after you!',
      url: 'http://patriciopalladino.com/blog/2012/08/09/non-alphanumeric-javascript.html',
      description:
        'I just made a tool to transform any javascript code into an equivalent sequence of `()[]{}!+` characters.',
      issue: 1,
      published_at: '2021-04-24T08:54:34.392Z',
      created_by: 1,
      updated_by: 1,
      created_at: '2021-04-24T08:54:30.581Z',
      updated_at: '2021-05-01T08:19:33.718Z',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          published_at: '2021-04-24T08:58:10.676Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:58:08.220Z',
          updated_at: '2021-04-24T08:58:10.723Z',
        },
        {
          id: 6,
          name: 'WTF',
          published_at: '2021-04-24T08:59:33.913Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:59:31.444Z',
          updated_at: '2021-04-24T08:59:33.942Z',
        },
      ],
      authors: [
        {
          id: 1,
          Name: 'Patricio Palladino',
          Website: 'http://patriciopalladino.com/',
          published_at: '2021-04-24T08:55:18.175Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:55:15.798Z',
          updated_at: '2021-04-24T08:55:18.238Z',
        },
      ],
    },
    {
      id: 2,
      title: 'What is the best comment in source code you have ever encountered?',
      url:
        'https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered',
      description:
        "This article is an introduction to React for beginners, and provides a bird's eye view with an interactive hands-on experience of writing an actual React component. It should probably be the first post that you should go through before getting familiar with its APIs.",
      issue: 1,
      published_at: '2021-04-24T09:01:18.530Z',
      created_by: 1,
      updated_by: 1,
      created_at: '2021-04-24T09:01:16.228Z',
      updated_at: '2021-05-01T08:19:33.718Z',
      tags: [
        {
          id: 1,
          name: '10xProgrammer',
          published_at: '2021-04-24T08:58:10.676Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:58:08.220Z',
          updated_at: '2021-04-24T08:58:10.723Z',
        },
      ],
      authors: [
        {
          id: 2,
          Name: 'Robert Harvey',
          Website: 'https://twitter.com/lintonye?lang=en',
          published_at: '2021-04-24T08:55:48.506Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:55:45.904Z',
          updated_at: '2021-04-24T08:56:20.952Z',
        },
      ],
    },
  ],
  tools: [
    {
      id: 1,
      name: 'ThanosJS',
      url: 'https://thanosjs.org/',
      logo: 'https://www.placecage.com/c/300/300',
      description: 'Reduce the file size of your project down to 50%, by randomly deleting half of the files.',
      issue: 1,
      published_at: '2021-04-27T18:52:28.545Z',
      created_by: 1,
      updated_by: 1,
      created_at: '2021-04-27T18:52:26.954Z',
      updated_at: '2021-05-22T19:16:16.201Z',
      authors: [
        {
          id: 3,
          Name: 'Anand Undavia',
          Website: 'https://github.com/anandundavia',
          published_at: '2021-04-24T08:57:37.126Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:57:00.689Z',
          updated_at: '2021-04-24T08:57:37.164Z',
        },
      ],
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          published_at: '2021-04-24T08:58:10.676Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:58:08.220Z',
          updated_at: '2021-04-24T08:58:10.723Z',
        },
        {
          id: 5,
          name: 'Optimization',
          published_at: '2021-04-24T08:59:03.804Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:59:01.548Z',
          updated_at: '2021-04-24T08:59:03.846Z',
        },
      ],
    },
    {
      id: 2,
      name: 'fartscroll.js',
      url: 'http://theonion.github.io/fartscroll.js/',
      logo: 'https://www.placecage.com/c/300/300',
      description:
        'Everyone farts—men, women, children, dogs, cats—and fartscroll.js can make your website fart too. What this funny JavaScript library actually does is insert fart noises as you scroll.',
      issue: 1,
      published_at: '2021-04-27T18:53:18.189Z',
      created_by: 1,
      updated_by: 1,
      created_at: '2021-04-27T18:53:16.262Z',
      updated_at: '2021-05-22T19:15:14.599Z',
      authors: [
        {
          id: 4,
          Name: 'Onion, Inc',
          Website: 'https://github.com/theonion',
          published_at: '2021-04-24T08:57:30.553Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:57:26.351Z',
          updated_at: '2021-04-24T08:57:30.590Z',
        },
      ],
      tags: [
        {
          id: 2,
          name: 'UX',
          published_at: '2021-04-24T08:58:23.566Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:58:21.103Z',
          updated_at: '2021-04-24T08:58:23.617Z',
        },
        {
          id: 3,
          name: 'JavaScript',
          published_at: '2021-04-24T08:58:40.517Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:58:36.954Z',
          updated_at: '2021-04-24T08:58:40.557Z',
        },
      ],
    },
  ],
  talks: [
    {
      id: 1,
      title: 'What the... JavaScript?',
      url: 'https://youtu.be/2pL28CcEijU',
      description:
        "Kyle Simpson's talk for Forward 2 attempts to “pull out the crazy” from JavaScript. He wants to help you produce cleaner, more elegant, more readable code, then inspire people to contribute to the open source community.",
      issue: 1,
      published_at: '2021-04-27T18:46:26.278Z',
      created_by: 1,
      updated_by: 1,
      created_at: '2021-04-27T18:46:24.486Z',
      updated_at: '2021-05-01T08:19:33.733Z',
      tags: [
        {
          id: 7,
          name: 'Best Practices',
          published_at: '2021-04-24T08:59:47.332Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-24T08:59:45.423Z',
          updated_at: '2021-04-24T08:59:47.384Z',
        },
      ],
      authors: [
        {
          id: 20,
          Name: 'Kyle Simpson',
          Website: 'https://me.getify.com/',
          published_at: '2021-04-27T15:17:57.506Z',
          created_by: 1,
          updated_by: 1,
          created_at: '2021-04-27T15:17:55.661Z',
          updated_at: '2021-04-27T15:17:57.673Z',
        },
      ],
    },
  ],
};

export default SAMPLE_ISSUE_API_RESPONSE;
