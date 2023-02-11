/*
 *  Sections
 *   - Header
 *   - Objectives
 *   - Experience
 *   - Education
 *   - Skill
 *   - Projects
 *   - Achievement
 *   - References
 * */
export const dummyProfile = {
  id: 'A',
  personalDetails: {
    name: 'Austin Bronson',
    address: '13th Street 47 W 13th St, New York',
    phone: '+9343434323',
    email: 'useremail@gmail.com',
    subTitle: 'Graphics Designer',
    profileImage: null,
    profileImageBase64: null,
    // profileImage: true,
    // profileImageBase64: 'https://raw.githubusercontent.com/hasansujon786/dotfiles/main/default-user.png'
  },
  educations: [
    {
      id: '0',
      courseOrDegree: 'MA in English Literature',
      schoolOrUniversity: 'Harvard University, Cambridge, MA',
      grade: '4.0',
      year: '2012',
    },
    {
      id: '1',
      courseOrDegree: 'Computer Science',
      schoolOrUniversity: 'River Brook University, Chicago, IL',
      grade: '4.0',
      year: '2012',
    },
  ],
  experiences: [
    {
      id: '0',
      companyName: "Kohl's, Mentor, Ohio",
      jobTitle: 'Sales Associate',
      startDate: '2009',
      endDate: '2012',
      details:
        'Greeted Customer and made them feel welcome, operated cash registers, stocked and organized the mens department.',
    },
    {
      id: '1',
      companyName: 'Paxway Inc / Fairfax, VA',
      jobTitle: 'Executive Assistant',
      startDate: '2013',
      endDate: 'present',
      details:
        'Managed and prioritize our partners schedules to ensure that their time is focused on critical, strategic issues',
    },
  ],
  references: [
    {
      id: '0',
      companyName: "Kohl's, Mentor, Ohio",
      jobTitle: 'Sales Associate',
      phone: '+9343434323',
      email: 'useremail@gmail.com',
    },
    {
      id: '1',
      companyName: "Kohl's, Mentor, Ohio",
      jobTitle: 'Sales Associate',
      phone: '+9343434323',
      email: 'useremail@gmail.com',
    },
  ],
  projects: [
    {
      id: '0',
      title: 'Database Developments',
      details:
        'Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention.',
    },
    {
      id: '1',
      title: 'Mobile Application Development',
      details:
        'Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention.',
    },
  ],
  skills: [
    // TODO: <31.01.23> Validate name section before render level inside template
    { id: '0', name: 'Sales', level: 3 },
    { id: '1', name: 'Team building', level: 4 },
    { id: '2', name: 'Problem solving', level: 5 },
  ],
  achievements: [
    { id: '0', name: 'Specialized in Sales' },
    { id: '1', name: 'Decision making' },
  ],
  interests: [
    { id: '0', name: 'Programming' },
    { id: '1', name: 'Singing' },
    { id: '2', name: 'Problem solving' },
    { id: '3', name: 'Cycling' },
  ],
  languages: [
    { id: '0', name: 'English', level: 3 },
    { id: '1', name: 'Duthc', level: 4 },
    { id: '2', name: 'Hindi', level: 5 },
  ],
  objective: 'I seek challenging opportunities where I can fully use my skills for the success of the organization.',
  additionalInformation:
    'Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention. Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention. Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention. Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention. Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention. Coordinate communications, track and follow up on requests and identify those of importance which require immediate attention.',
}
