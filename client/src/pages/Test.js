const generateRandomUserData = () => {
  const names = [
    "John Doe",
    "Alice Smith",
    "Bob Johnson",
    "Emma Davis",
    "Chris Brown",
    "Olivia Wilson",
  ];
  const locations = [
    "New York",
    "London",
    "Los Angeles",
    "Paris",
    "Tokyo",
    "Sydney",
  ];
  const descriptions = [
    "UI/UX designer and front-end developer",
    "Software engineer",
    "Graphic designer",
    "Project manager",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    name: randomName,
    location: randomLocation,
    description: randomDescription,
  };
};

const generateRandomProjectData = () => {
  const titles = [
    "Project A",
    "Project B",
    "Project C",
    "Web App Development",
    "Mobile App Design",
    "E-commerce Platform",
  ];
  const projectDescriptions = [
    "This is project A description.",
    "Project B details here.",
    "Description for Project C",
    "Project X information.",
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription =
    projectDescriptions[Math.floor(Math.random() * projectDescriptions.length)];
  const isPrivate = Math.random() < 0.5; // Randomly set project as private or not

  return {
    title: randomTitle,
    description: randomDescription,
    creator: generateRandomUserData().name, // Use a random user's name as the creator for simplicity
    isPrivate: isPrivate,
  };
};

export const generateUsers = (count) => {
  const users = Array.from({ length: count }, generateRandomUserData);
  return users;
};

export const generateProjects = (count) => {
  const projects = Array.from({ length: count }, generateRandomProjectData);
  return projects;
};