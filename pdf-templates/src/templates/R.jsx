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

const TemplateR = ({ profile }) => {
  return (
    <main
      id='R'
      className='bg-white grid grid-cols-2 p-2 gap-x-5'
      style={{ gridTemplateRows: '100px 1fr', gridTemplateColumns: '1fr 2fr' }}
    >
      {/* left col */}
      <section className='space-y-2'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div>
              {/* img */}
              <div className='bg-gray-800 aspect-square rounded overflow-hidden'>
                <PersonalDetails personalDetails={profile.personalDetails}>
                  {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
                </PersonalDetails>
              </div>
              <div className='space-y-0_half mt-2'>
                <p className='text-xs text-neutral'>Phone: {p.phone}</p>
                <p className='text-xs text-neutral'>Email: {p.email}</p>
                <p className='text-xs text-neutral'>Address: {p.address}</p>
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
      </section>

      {/* right col */}
      <section className='space-y-2'>
        {/* top */}
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='bg-primary px-4 py-3'>
              <h1 className='name font-semibold text-on-primary'>{p.name}</h1>
              <h3
                className='text-sm inline-block pr-4 border-on-primary text-on-primary tracking-widest'
                style={{ borderBottomWidth: '1.5px' }}
              >
                {p.subTitle}
              </h3>
              <Objective title='Profile' text={profile.objective}>
                {(title, text) => <p className='text-xs mt-2 text-on-primary'>{text}</p>}
              </Objective>
            </div>
          )}
        </PersonalDetails>

        <Experience experiences={profile.experiences}>
          {(title, experiences) => (
            <section>
              <Header>{title}</Header>
              {experiences.map((item, i) => (
                <CommonTile
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
                <CommonTile key={i} main={item.title} bottom={item.details} />
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
              <p className='text-xs mt-1 text-neutral'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateR
