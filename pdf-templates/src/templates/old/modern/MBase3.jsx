import React from 'react'
import { References, Projects } from '../../shared'
import { isEmpty } from 'underscore'
/*
*  Sections
*   - Personal Details
*   - Education
*   - Experience
*   - Skills
*   - Objective
*   - References
*   - Projects
*   - Achievement
*   - Additional Information
*   - Interests
*   - Language

*   - Activities
*   - Publication
*   - Signature
* */

const SectionHeading = ({ children }) => (
  <div className='section-heading'>
    <h3 className='heading'>
      <span>{children}</span>
    </h3>
  </div>
)

const PersonalDetails = ({ personalDetails }) => {
  if (isEmpty(personalDetails)) return ''
  const { address, phone, email, profileImage, profileImageBase64 } = personalDetails
  return (
    <header className='PersonalDetails '>
      {profileImage && (
        <div className='profile-img'>
          <img src={profileImageBase64} alt='profile image' />
        </div>
      )}
      <div className=''>
        <div className=''>
          <div className='me-5'>
            <p className='m-0'>{phone}</p>
            <p className='m-0'>{email}</p>
            <p className='m-0'>{address}</p>
          </div>

          {/* add social */}
          {/* <div className=''> */}
          {/*   <p className='m-0'>{email}</p> */}
          {/*   <p className='m-0'>{phone}</p> */}
          {/*   <p className='m-0'>{address}</p> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  )
}

const Objective = ({ title, objective }) => {
  if (isEmpty(objective)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      <div className='row'>
        <div className='col-12'>
          <p>{objective}</p>
        </div>
      </div>
    </section>
  )
}

const Experience = ({ title, experiences }) => {
  if (isEmpty(experiences)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      <div className='row'>
        {experiences &&
          experiences.map((ex, idx) => (
            <div className='col-12' key={idx}>
              <div className='d-flex justify-content-between'>
                <li>
                  <b>{ex.companyName}</b>
                </li>
                <p className='fs-7 mb-0'>
                  <em>
                    {ex.startDate} - {ex.endDate}
                  </em>
                </p>
              </div>
              <ul>
                <p className='fs-7 mb-0'>{ex.jobTitle}</p>
                <p className='fs-7 mb-0'>{ex.details}</p>
              </ul>
            </div>
          ))}
      </div>
    </section>
  )
}

const SimpleList = ({ title, items }) => {
  if (isEmpty(items)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      {items.map((skill, idx) => (
        <li key={idx}>{skill.name}</li>
      ))}
    </section>
  )
}

const Education = ({ title, educations }) => {
  if (isEmpty(educations)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      <div className='row'>
        {educations &&
          educations.map((edu, idx) => (
            <div className='col-12' key={idx}>
              <div className='d-flex justify-content-between'>
                <li>
                  <b>{edu.courseOrDegree}</b>
                </li>
                <p className='fs-7 mb-0'>
                  <em>{edu.year}</em>
                </p>
              </div>
              <div>
                <ul>
                  <p className='fs-7 mb-0'>{edu.schoolOrUniversity}</p>
                  <p className='fs-7 mb-0'>{edu.grade}</p>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

const AdditionalInformation = ({ title, additionalInformation }) => {
  if (isEmpty(additionalInformation)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      <div className='row'>
        <div className='col-12'>
          <p className='fs-7 mb-0'>{additionalInformation}</p>
        </div>
      </div>
    </section>
  )
}

function MBase3({ templateId, profile }) {
  const {
    personalDetails,
    objective,
    experiences,
    skills,
    achievements,
    educations,
    additionalInformation,
    interests,
    languages,
  } = profile

  return (
    <div className={templateId}>
      <div className='row'>
        <div className='col-12 mb-3 '>
          <h1 className='name m-0 text-uppercase px-2 text-white bg-theme'>{personalDetails.name}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <PersonalDetails personalDetails={personalDetails} />
          <SimpleList title='Skill' items={skills} />
          <SimpleList title='Interests' items={interests} />
          <SimpleList title='Achievement' items={achievements} />
          <SimpleList title='Language' items={languages} />
          <References references={profile.references}>
            {(title, references) => (
              <section className='mt-3'>
                <SectionHeading>{title}</SectionHeading>
                {references.map((item, i) => (
                  <div className='mt-1' key={i}>
                    <p className='text-xs text-neutral'>{item.companyName}</p>
                    <h3 className='text-sm text-black tracking-wider font-semibold'>{item.jobTitle}</h3>
                    <div className='flex'>
                      <p className='text-xs text-neutral'>{item.email}</p>
                      {item.email && item.phone && <p className='text-xs text-neutral'>&nbsp;/&nbsp;</p>}
                      <p className='text-xs text-neutral'>{item.phone}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </References>
        </div>
        <div className='col-8'>
          <Objective title='Objective' objective={objective} />
          <Education title='Education' educations={educations} />
          <Experience title='Experience' experiences={experiences} />
          <Projects projects={profile.projects}>
            {(title, projects) => (
              <section className='mt-3'>
                <SectionHeading>{title}</SectionHeading>
                <div className='space-y-2 mt-2'>
                  {projects.map((item, i) => (
                    <div key={i} className=''>
                      <h3 className='text-sm text-black tracking-wider font-semibold'>{item.title}</h3>
                      <p className='text-xs text-neutral'>{item.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </Projects>
          <AdditionalInformation title='Additional Information' additionalInformation={additionalInformation} />
        </div>
      </div>
    </div>
  )
}

export default MBase3
