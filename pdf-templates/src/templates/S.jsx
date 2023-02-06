import React from 'react'
import {
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
import { CommonTile } from './Q'
import RatingList from './shared/RatingList'
import SimpleList from './shared/SimpleList'
import InfoRow from './shared/InfoRow'

const Header = ({ children }) => (
  <div className=''>
    <h2 className='heading text-primary font-semibold uppercase'>{children}</h2>
    <div className='relative'>
      <hr className='absolute -left-1 -right-1 border-primary' style={{ borderTopWidth: '2px' }} />
    </div>
  </div>
)

const TemplateS = ({ profile }) => {
  return (
    <main id='S' className='bg-white debu grid grid-cols-2' style={{ gridTemplateColumns: '1fr 2fr' }}>
      {/* left col */}
      <section
        className='h-full bg-secondary'
        style={{ '--list-text-c': 'var(--on-secondary)', '--bar-b': 'var(--gray-500)', '--bar-t': 'var(--primary)' }}
      >
        <div className='aspect-portait relative overflow-hidden' style={{ '--w': '48' }}>
          <div className='h-full w-full angle-bar-wrapper'>
            <div
              className='bg-primary absolute'
              style={{ width: 'calc(var(--w) * 1px)', left: 'calc(var(--w) * -0.98px)', height: '150%' }}
            />
            <div className='bg-white' style={{ width: '70%', height: '150%' }}></div>
          </div>

          <div className='w-full h-full relative flex justify-center items-center'>
            <div className='bg-gray-800 rounded-full border-4 border-white aspect-portait overflow-hidden' style={{ width: '150px' }}>
              <PersonalDetails personalDetails={profile.personalDetails}>
                {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
              </PersonalDetails>
            </div>
          </div>
        </div>

        <div className='px-4 space-y-3'>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <div>
                <div className='text-center -mt-6 mb-2'>
                  <h1 className='name leading-none font-semibold text-primary'>{p.name}</h1>
                  <h3 className='text-xs mt-1 font-semibold text-on-secondary tracking-widest'>{p.subTitle}</h3>
                  <hr className='border-primary mt-2' style={{ borderTopWidth: '2px' }} />
                </div>
                <div className='space-y-0_half text-center'>
                  <p className='text-xs text-on-secondary'>Phone: {p.phone}</p>
                  <p className='text-xs text-on-secondary'>Email: {p.email}</p>
                  <p className='text-xs text-on-secondary'>Address: {p.address}</p>
                </div>
              </div>
            )}
          </PersonalDetails>

          <Skills title='Technical Skills' items={profile.skills}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <RatingList items={items} />
              </div>
            )}
          </Skills>

          <Languages items={profile.languages}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <RatingList items={items} />
              </div>
            )}
          </Languages>

          <Achievements items={profile.achievements}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <SimpleList col='grid-cols-1 mt-1' items={items} />
              </div>
            )}
          </Achievements>

          <Interests items={profile.interests}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <SimpleList col='grid-cols-1 mt-1' items={items} />
              </div>
            )}
          </Interests>
        </div>
      </section>

      {/* right col */}
      <section className='space-y-2 pt-8 pl-5 relative overflow-hidden'>
        <div className='angle-bar-wrapper bg-primary w-12 h-20 right-0 top-0' />

        <Objective title='Profile' text={profile.objective}>
          {(title, text) => (
            <div>
              <Header>{title}</Header>
              <p className='text-xs mr-4 mt-2 text-neutral'>{text}</p>
            </div>
          )}
        </Objective>

        <Experience experiences={profile.experiences}>
          {(title, experiences) => (
            <section>
              <Header>{title}</Header>
              {experiences.map((item, i) => (
                <CommonTile
                  className='mr-4'
                  key={i}
                  main={item.jobTitle}
                  subTitle={item.companyName}
                  right={<InfoRow className='inline-flex' left={item.startDate} right={item.endDate} />}
                  bottom={item.details}
                />
              ))}
            </section>
          )}
        </Experience>

        <Projects projects={profile.projects}>
          {(title, projects) => (
            <section>
              <Header>{title}</Header>
              {projects.map((item, i) => (
                <CommonTile className='mr-4' key={i} main={item.title} bottom={item.details} />
              ))}
            </section>
          )}
        </Projects>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <section>
              <Header>{title}</Header>
              {educations.map((item, i) => (
                <CommonTile
                  className='mr-4'
                  gridCols={3}
                  key={i}
                  main={item.courseOrDegree}
                  subTitle={item.schoolOrUniversity}
                  bottom={<InfoRow className='inline-flex' left={item.grade} right={item.year} />}
                />
              ))}
            </section>
          )}
        </Education>

        <References references={profile.references}>
          {(title, references) => (
            <section>
              <Header>{title}</Header>
              {references.map((item, i) => (
                <CommonTile
                  className='mr-4'
                  key={i}
                  main={item.jobTitle}
                  subTitle={item.companyName}
                  bottom={<InfoRow className='inline-flex' left={item.email} right={item.phone} />}
                />
              ))}
            </section>
          )}
        </References>

        <AdditionalInformation text={profile.additionalInformation}>
          {(title, text) => (
            <div>
              <Header>{title}</Header>
              <p className='text-xs mr-4 mt-1 text-neutral'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateS
