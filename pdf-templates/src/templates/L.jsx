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

const CommonTile = ({ top, main, bottom }) => {
  return (
    <div className='mt-2'>
      <p className='text-sm'>{top}</p>
      <h3 className='text-sm font-semibold text-white uppercase'>{main}</h3>
      <p className='text-sm'>{bottom}</p>
    </div>
  )
}

const TemplateL = ({ profile }) => {
  return (
    <main id='L' className='flex'>
      {/* left column */}
      <section className='flex-1 px-4 bg-primary'>
        <div className='text-on-primary space-y-3' style={{ '--heading-c': '#fff' }}>
          {/* intro */}
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <section className='text-left mt-8 mb-8'>
                <h1 className='name text-white'>{p.name}</h1>
                <div className='h-1.5 mt-2 bg-white'></div>
                <div className='mt-2'></div>
                <p className='text-xs'>{p.phone}</p>
                <p className='text-xs'>{p.email}</p>
                <p className='text-xs'>{p.address}</p>
              </section>
            )}
          </PersonalDetails>

          <Experience experiences={profile.experiences}>
            {(title, experiences) => (
              <section>
                <SectionHeading>{title}</SectionHeading>
                {experiences.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.companyName}
                    main={
                      <span>
                        {item.jobTitle} &nbsp;
                        <InfoRow className='inline-flex' left={item.startDate} right={item.endDate} separator='-' />
                      </span>
                    }
                    bottom={item.details}
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
                  <CommonTile key={i} main={item.title} bottom={item.details} />
                ))}
              </section>
            )}
          </Projects>

          <Education educations={profile.educations}>
            {(title, educations) => (
              <section>
                <SectionHeading>{title}</SectionHeading>
                {educations.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.schoolOrUniversity}
                    main={<InfoRow className='inline-flex' left={item.courseOrDegree} right={item.year} />}
                    bottom={item.grade}
                  />
                ))}
              </section>
            )}
          </Education>

          <References references={profile.references}>
            {(title, references) => (
              <section>
                <SectionHeading>{title}</SectionHeading>
                {references.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.companyName}
                    main={item.jobTitle}
                    bottom={<InfoRow className='inline-flex' left={item.email} right={item.phone} />}
                  />
                ))}
              </section>
            )}
          </References>
        </div>
      </section>

      {/* right column */}
      <section
        className='bg-white w-2_5 h-full pl-3 space-y-2'
        style={{ '--bar-b': 'var(--gray-300)', '--bar-t': 'var(--accent)', '--list-text-c': 'var(--neutral)' }}
      >
        <div className='bg-gray-800 overflow-hidden aspect-square'>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
          </PersonalDetails>
        </div>
        {/* about */}
        <Objective text={profile.objective}>
          {(title, text) => (
            <div>
              <SectionHeading>{title}</SectionHeading>
              <p className='text-sm text-neutral'>{text}</p>
            </div>
          )}
        </Objective>

        <Skills items={profile.skills}>
          {(title, items) => (
            <div className='text-gray-300'>
              <SectionHeading>{title}</SectionHeading>
              <RatingList items={items} />
            </div>
          )}
        </Skills>

        <Achievements items={profile.achievements}>
          {(title, items) => (
            <div className='text-gray-300'>
              <SectionHeading>{title}</SectionHeading>
              <RatingList items={items} />
            </div>
          )}
        </Achievements>

        <Languages items={profile.languages}>
          {(title, items) => (
            <div className='text-gray-300'>
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

        <AdditionalInformation title='Info' text={profile.additionalInformation}>
          {(title, text) => (
            <div>
              <SectionHeading>{title}</SectionHeading>
              <p className='text-sm text-neutral'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateL
