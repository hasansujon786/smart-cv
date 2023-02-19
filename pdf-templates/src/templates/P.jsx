import React from 'react'
import { isEmpty } from 'underscore'
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
import SimpleList from './shared/SimpleList'
import { CommonTile } from './Q'
import InfoRow from './shared/InfoRow'

const Header = ({ children }) => (
  <div className=''>
    <h2 className='heading text-neutral font-semibold'>{children}</h2>
    <div className='relative'>
      <div className='border-b-2 opacity-40 border-primary absolute -left-1 -right-1' />
    </div>
  </div>
)

const TemplateP = ({ profile }) => {
  return (
    <main
      id='P'
      className='bg-white grid grid-cols-2 p-2 gap-x-5'
      style={{ gridTemplateRows: '100px 1fr', gridTemplateColumns: '1fr 2fr' }}
    >
      {/* top */}
      <section className='col-span-full'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='flex flex-col justify-center h-full'>
              <h1 className='name ml-3 font-semibold text-neutral'>{p.name}</h1>
              <div className='flex items-center'>
                <div className='border-b-2 opacity-40 border-primary flex-1 -ml-1' />
                {!isEmpty(p.subTitle) && (
                  <div className='bg-primary px-3 py-1 -mr-1'>
                    <h3 className='text-sm text-on-primary tracking-widest font-semibold uppercase'>{p.subTitle}</h3>
                  </div>
                )}
              </div>
            </div>
          )}
        </PersonalDetails>
      </section>

      {/* left col */}
      <section className='space-y-2'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div>
              <Header>Contact</Header>
              <div className='space-y-0_half mt-2'>
                <p className='text-xs text-neutral'>Phone: {p.phone}</p>
                <p className='text-xs text-neutral'>Email: {p.email}</p>
                <p className='text-xs text-neutral'>Address: {p.address}</p>
              </div>
            </div>
          )}
        </PersonalDetails>

        <Skills items={profile.skills}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <SimpleList col='grid-cols-1 mt-1' items={items} />
            </div>
          )}
        </Skills>

        <Languages items={profile.languages}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <SimpleList col='grid-cols-1 mt-1' items={items} />
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
        <Objective title='Profile' text={profile.objective}>
          {(title, text) => (
            <div>
              <Header>{title}</Header>
              <p className='text-xs mt-1 text-neutral'>{text}</p>
            </div>
          )}
        </Objective>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <section>
              <Header>{title}</Header>
              {educations.map((item, i) => (
                <CommonTile
                  gridCols={2}
                  key={i}
                  main={item.courseOrDegree}
                  subTitle={item.schoolOrUniversity}
                  bottom={<InfoRow className='inline-flex' left={item.grade} right={item.year} />}
                />
              ))}
            </section>
          )}
        </Education>

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

export default TemplateP
