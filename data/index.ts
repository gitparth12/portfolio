export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I love exploring tech and bringing cool ideas to life through projects',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone and communication",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently working on my honours thesis in AI',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Want to get in touch and talk about something cool?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Ninja Platformer Game',
    des: 'A simple game built in Python, with a custom level editor that allows making new levels seamless.',
    img: '/ninja.svg',
    iconLists: ['/python.svg', '/pygame.svg'],
    link: 'https://github.com/gitparth12/ninja_game',
  },
  {
    id: 2,
    title: 'UniTrack - University Course Planner',
    des: 'Helps plan your unit choices, organise your studies and assessments. Built with USYD students in mind, currently an open-source project.',
    img: '/unitrack.svg',
    iconLists: ['/html.svg', '/sass.svg', '/python.svg', '/docker.svg', '/bash.svg'],
    link: 'https://github.com/gitparth12/unitrack',
  },
  {
    id: 3,
    title: 'My Portfolio (yes this one)',
    des: "Built from scratch using technologies I've always wanted to learn, to display my projects and myself.",
    img: '/website.svg',
    iconLists: ['/threejs.svg', '/tailwind.svg', '/typescript.svg', '/next.svg'],
    link: 'https://github.com/gitparth12/portfolio',
  },
  {
    id: 4,
    title: 'My Other Projects',
    des: 'Some of my other projects, either done for uni or purely for functionality can be found on my GitHub. Check them out.',
    img: '/github.svg',
    iconLists: ['/javascript.svg', '/rust-white.svg', '/lua.svg', '/java.svg', '/c.svg'],
    link: 'https://github.com/gitparth12?tab=repositories',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Engineering Vacation Research Intern',
    desc: 'Assisted A/Prof. Lijun Chang in exploring maximum vertex and maximum edge micliques in large, sparse bipartite graphs.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Machine Learning Intern',
    desc: 'Learned and applied concepts such as skip connections, layer aggregation, back propagation, and gradient descent in neural networks; worked on an image segmentation problem using the YOLOv7 model.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Casual Academic',
    desc: 'Taught classes for COMP2123, the Data Structures and Algorithms unit at USYD; solidified my own knowledge and helped me develop unique skills.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Development Lead',
    desc: 'For the Sydney Computing Society – involved programming for society events, managing services, and helping out with event organisation.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/gitparth12',
  },
  // {
  //   id: 2,
  //   img: '/twitter.svg',
  // },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/parthbhargava/',
  },
];
