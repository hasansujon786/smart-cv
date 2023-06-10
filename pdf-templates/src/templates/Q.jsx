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
import SimpleList from './shared/SimpleList'
import InfoRow from './shared/InfoRow'

const Header = ({ children }) => (
  <div className='uppercase font-bold text-accent'>
    <h2 className='heading border-b-2 border-b-accent inline-block px-0_half leading-tight'>{children}</h2>
  </div>
)

export const CommonTile = ({ main, subTitle, right, bottom, gridCols = '3', className }) => {
  return (
    <div className={[`CommonTile grid ${gridCols == 2 ? 'grid-cols-2' : 'grid-cols-3'} mt-2 ${className}`]}>
      <h3 className='text-xs text-neutral font-bold uppercase col-span-2'>{main}</h3>
      <div className='text-xs text-muted text-right'>{right}</div>
      <div className='text-xs text-muted col-span-full'>{subTitle}</div>
      <div className='text-xs text-neutral col-span-full'>{bottom}</div>
    </div>
  )
}

const TemplateQ = ({ profile }) => {
  return (
    <main id='Q' className='bg-white'>
      <section>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='bg-primary'>
              <div className='px-5 py-5'>
                <h1 className='name font-semibold text-on-primary'>{p.name}</h1>
                <h3 className='text-sm text-on-primary opacity-70 tracking-widest font-semibold uppercase'>
                  {p.subTitle}
                </h3>
                <Objective title='Profile' text={profile.objective}>
                  {(_, text) => <p className='text-xs mt-1 text-on-primary'>{text}</p>}
                </Objective>
              </div>
              <div className='bg-secondary flex flex-wrap justify-around py-2 px-3'>
                <p className='text-xs text-on-secondary'>{p.phone}</p>
                <p className='text-xs text-on-secondary'>{p.email}</p>
                <p className='text-xs text-on-secondary'>{p.address}</p>
              </div>
            </div>
          )}
        </PersonalDetails>
      </section>

      <section className='mt-3 space-y-5'>
        <Skills title='General Skills' items={profile.skills}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <div className='mt-2 flex flex-wrap gap-2'>
                {items.map((item, i) => (
                  <div key={i} className='bg-accent px-2 py-1 rounded'>
                    <p className='text-xs text-on-accent'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Skills>

        <Experience experiences={profile.experiences}>
          {(title, experiences) => (
            <div>
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
            </div>
          )}
        </Experience>

        <Projects projects={profile.projects}>
          {(title, projects) => (
            <div>
              <Header>{title}</Header>
              <div className=''>
                {projects.map((item, i) => (
                  <CommonTile key={i} main={item.title} bottom={item.details} />
                ))}
              </div>
            </div>
          )}
        </Projects>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <div>
              <Header>{title}</Header>
              <div className='grid grid-cols-2 gap-x-2'>
                {educations.map((item, i) => (
                  <CommonTile
                    gridCols={2}
                    key={i}
                    mt={0}
                    main={item.courseOrDegree}
                    subTitle={item.schoolOrUniversity}
                    bottom={<InfoRow className='inline-flex' left={item.grade} right={item.year} />}
                  />
                ))}
              </div>
            </div>
          )}
        </Education>

        <References references={profile.references}>
          {(title, references) => (
            <div>
              <Header>{title}</Header>
              <div className='grid grid-cols-2 gap-x-2'>
                {references.map((item, i) => (
                  <CommonTile
                    key={i}
                    main={item.jobTitle}
                    subTitle={item.companyName}
                    bottom={<InfoRow className='inline-flex' left={item.email} right={item.phone} />}
                  />
                ))}
              </div>
            </div>
          )}
        </References>

        <Achievements items={profile.achievements}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <SimpleList col='grid-cols-4 mt-2' items={items} />
            </div>
          )}
        </Achievements>

        <Interests items={profile.interests}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <SimpleList col='grid-cols-4 mt-2' items={items} />
            </div>
          )}
        </Interests>

        <Languages items={profile.languages}>
          {(title, items) => (
            <div>
              <Header>{title}</Header>
              <SimpleList col='grid-cols-4 mt-2' items={items} />
            </div>
          )}
        </Languages>

        <AdditionalInformation text={profile.additionalInformation}>
          {(title, text) => (
            <div>
              <Header>{title}</Header>
              <p className='text-xs mt-2 text-neutral'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateQ
