import React from 'react'
import { isEmpty } from 'underscore'

export const SectionHeading = ({ children }) => (
  <div className='section-heading'>
    <h2  className='heading font-semibold uppercase' style={{ color: 'var(--heading-c, black)' }}>
      {children}
    </h2>
  </div>
)

export const PersonalDetails = ({ personalDetails, children }) => {
  if (isEmpty(personalDetails)) return ''
  // const { name, address, phone, email, profileImage, profileImageBase64 } = personalDetails
  return children(personalDetails)
}

export const Experience = ({ title = 'Experience', experiences, children }) => {
  if (isEmpty(experiences)) return ''
  return children(title, experiences)
}

export const Education = ({ title = 'Education', educations, children }) => {
  if (isEmpty(educations)) return ''
  return children(title, educations)
}

export const References = ({ title = 'References', references, children }) => {
  if (isEmpty(references)) return ''
  return children(title, references)
}

export const Objective = ({ title = 'Objective', text, children }) => {
  if (isEmpty(text)) return ''
  return children(title, text)
}

export const AdditionalInformation = ({ title = 'Additional Information', text, children }) => {
  if (isEmpty(text)) return ''
  return children(title, text)
}

export const Projects = ({ title = 'Projects', projects, children }) => {
  if (isEmpty(projects)) return ''
  return children(title, projects)
}

export const Skills = ({ title = 'Skills', items, children }) => {
  if (isEmpty(items)) return ''
  return children(title, items)
}

export const Achievements = ({ title = 'Achievements', items, children }) => {
  if (isEmpty(items)) return ''
  return children(title, items)
}

export const Languages = ({ title = 'Languages', items, children }) => {
  if (isEmpty(items)) return ''
  return children(title, items)
}

export const Interests = ({ title = 'Interests', items, children }) => {
  if (isEmpty(items)) return ''
  return children(title, items)
}
