class Profile {
  constructor(profileId) {
    this.id = profileId
    this.personalDetails = {}
    this.educations = []
    this.experiences = []
    this.references = []
    this.projects = []
    this.skills = []
    this.achievements = []
    this.interests = []
    this.languages = []
    this.objective = ''
    this.additionalInformation = ''
  }
}

export default Profile
