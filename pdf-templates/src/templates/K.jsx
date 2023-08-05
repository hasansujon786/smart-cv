// This Template was removed
import React from 'react'
import {
  SectionHeading,
  PersonalDetails,
  Experience,
  Education,
  Objective,
  References,
  Projects,
  AdditionalInformation,
  Skills,
  Achievements,
  Interests,
  Languages,
} from './shared'
import RatingList from './shared/RatingList'
import SimpleList from './shared/SimpleList'
import InfoRow from './shared/InfoRow'

const BlockTile = ({ top, title, subtitle, info }) => {
  return (
    <div className='mt-2'>
      <div className='flex justify-between items-baseline'>
        <p className='text-xs text-muted'>{top}</p>
        <p className='text-xs text-muted'>{info}</p>
      </div>
      <h3 className='text-sm text-neutral font-semibold uppercase'>{title}</h3>
      <p className='text-xs text-muted'>{subtitle}</p>
    </div>
  )
}

const TemplateK = ({ profile }) => {
  return (
    <main id='K' className='flex'>
      <section className='w-2_5 h-full bg-primary '>
        <div className='bg-gray-800 overflow-hidden aspect-square'>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
          </PersonalDetails>
        </div>
        <section
          className='mx-3 pt-3 space-y-3'
          style={{
            '--heading-c': 'var(--on-primary)',
            '--list-text-c': 'var(--on-primary)',
          }}
        >
          <Objective text={profile.objective}>
            {(title, text) => (
              <div>
                <SectionHeading>{title}</SectionHeading>
                <p className='text-sm text-on-primary'>{text}</p>
              </div>
            )}
          </Objective>

          <Skills items={profile.skills}>
            {(title, items) => (
              <div>
                <SectionHeading>{title}</SectionHeading>
                <RatingList items={items} />
              </div>
            )}
          </Skills>

          <Achievements items={profile.achievements}>
            {(title, items) => (
              <div>
                <SectionHeading>{title}</SectionHeading>
                <RatingList items={items} />
              </div>
            )}
          </Achievements>

          <Languages items={profile.languages}>
            {(title, items) => (
              <div>
                <SectionHeading>{title}</SectionHeading>
                <RatingList items={items} />
              </div>
            )}
          </Languages>

          <Interests items={profile.interests}>
            {(title, items) => (
              <div>
                <SectionHeading>{title}</SectionHeading>
                <SimpleList items={items} />
              </div>
            )}
          </Interests>
        </section>
      </section>

      <section className='flex-1 bg-white h-full pt-8 space-y-4 px-3'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <section className='text-center'>
              <div className='mx-2'>
                <h1 className='name text-black'>{p.name}</h1>
                <div className='h-3 -mt-3 bg-accent' />
              </div>
              <div className='mt-2 text-muted'>
                <p className='text-sm'>{p.email}</p>
                <p className='text-sm'>{p.phone}</p>
                <p className='text-sm'>{p.address}</p>
              </div>
            </section>
          )}
        </PersonalDetails>

        <Experience experiences={profile.experiences}>
          {(title, experiences) => (
            <section>
              <SectionHeading>{title}</SectionHeading>
              {experiences.map((item, i) => (
                <BlockTile
                  key={i}
                  top={item.companyName}
                  title={item.jobTitle}
                  subtitle={item.details}
                  info={<InfoRow left={item.startDate} right={item.endDate} separator='-' />}
                />
              ))}
            </section>
          )}
        </Experience>

        <Projects projects={profile.projects}>
          {(title, projects) => (
            <section>
              <SectionHeading>{title}</SectionHeading>
              {projects.map((item, i) => (
                <div key={i}>
                  <h3 className='text-sm font-semibold text-neutral uppercase'>{item.title}</h3>
                  <p className='text-xs text-muted'>{item.details}</p>
                </div>
              ))}
            </section>
          )}
        </Projects>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <section>
              <SectionHeading>{title}</SectionHeading>

              {educations.map((edu, i) => (
                <BlockTile
                  key={i}
                  top={edu.schoolOrUniversity}
                  title={edu.courseOrDegree}
                  subtitle={edu.grade}
                  info={edu.year}
                />
              ))}
            </section>
          )}
        </Education>

        <References references={profile.references}>
          {(title, references) => (
            <section>
              <SectionHeading>{title}</SectionHeading>
              {references &&
                references.map((item, i) => (
                  <BlockTile
                    key={i}
                    top={item.companyName}
                    title={item.jobTitle}
                    subtitle={item.email}
                    info={item.phone}
                  />
                ))}
            </section>
          )}
        </References>

        <AdditionalInformation text={profile.additionalInformation}>
          {(title, text) => (
            <div>
              <SectionHeading>{title}</SectionHeading>
              <p className='text-sm text-muted'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateK
