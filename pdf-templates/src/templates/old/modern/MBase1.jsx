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
*   - Achievement
*   - Additional Information
*   - Interests
*   - Language

*   - References
*   - Projects

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
    <header className='PersonalDetails d-flex px-3 py-2 align-items-center'>
      {profileImage && (
        <div className='profile-img me-4'>
          <img src={profileImageBase64} alt='profile image' />
        </div>
      )}
      <div className='flex-grow-1'>
        <h1 className='name m-0 text-uppercase'>{name}</h1>
        <div className='d-flex ms-1 mt-2'>
          <div className='me-5'>
            <p className='m-0'>{email}</p>
            <p className='m-0'>{phone}</p>
            <p className='m-0'>{address}</p>
          </div>

          {/* TODO: add social links */}
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
              <ul>
                <li>
                  <b>{ex.companyName}</b>
                </li>
                <p className='fs-7 mb-0'>
                  <em>
                    {ex.startDate} - {ex.endDate}
                  </em>
                </p>
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
              <ul>
                <li>
                  <b>{edu.courseOrDegree}</b>
                </li>
                <p className='fs-7 mb-0'>
                  <em>{edu.year}</em>
                </p>
                <p className='fs-7 mb-0'>{edu.schoolOrUniversity}</p>
                <p className='fs-7 mb-0'>{edu.grade}</p>
              </ul>
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

function MBase1({ templateId, profile }) {
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
      <div className='row'>
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
        <div className='col-4'>
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
      </div>
    </div>
  )
}

export default MBase1
