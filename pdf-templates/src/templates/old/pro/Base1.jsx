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
  const { name, address, phone, email, profileImage, profileImageBase64 } = personalDetails
  return (
    <header className='d-flex text-center justify-content-between'>
      <div className='profile-img'>{profileImage && <img src={profileImageBase64} alt='profile image' />}</div>
      <div>
        <h1 className='name m-0'>{name}</h1>
        <p className='m-0'>{address}</p>
        <p>
          {phone} | {email}
        </p>
      </div>
      <div className='profile-img'></div>
    </header>
  )
}

const Objective = ({ title, objectives }) => {
  if (isEmpty(objectives)) return ''
  return (
    <section className='mt-3'>
      <SectionHeading>{title}</SectionHeading>
      <div className='row'>
        <div className='col-12'>
          <p>{objectives}</p>
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

function Base1({ templateId, profile }) {
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
      <PersonalDetails personalDetails={personalDetails} />
      <Education title='Education' educations={educations} />
      <Experience title='Experience' experiences={experiences} />
      <Objective title='Objective' objectives={objective} />
      <SimpleList title='Skill' items={skills} />
      <SimpleList title='Achievement' items={achievements} />

      <Projects projects={profile.projects}>
        {(title, projects) => (
          <section className='mt-3'>
            <SectionHeading>{title}</SectionHeading>
            <div className='space-y-2 mt-2'>
              {projects.map((item, i) => (
                <div key={i} className=''>
                  <li className='text-sm text-black tracking-wider font-semibold'>{item.title}</li>
                  <p className='text-xs text-neutral'>{item.details}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </Projects>

      <SimpleList title='Interests' items={interests || []} />
      <SimpleList title='Language' items={languages || []} />

      <References references={profile.references}>
        {(title, references) => (
          <section className='mt-3'>
            <SectionHeading>{title}</SectionHeading>
            {references.map((item, i) => (
              <div key={i} className='mt-2 space-y-2'>
                <div>
                  <div className='flex justify-between'>
                    <li className='text-sm text-black tracking-wider font-semibold'>{item.jobTitle}</li>
                    <p className='text-xs text-neutral'>{item.companyName}</p>
                  </div>
                  <div className='flex'>
                    <p className='text-xs text-neutral'>{item.email}</p>
                    {item.email && item.phone && <p className='text-xs text-neutral'>&nbsp;/&nbsp;</p>}
                    <p className='text-xs text-neutral'>{item.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </References>

      <AdditionalInformation title='Additional Information' additionalInformation={additionalInformation || ''} />
    </div>
  )
}

export default Base1
