import React from 'react'
import {
  Achievements,
  AdditionalInformation,
  Education,
  Experience,
  Interests,
  Languages,
  Objective,
  PersonalDetails,
  Projects,
  References,
  Skills,
} from './shared'
import InfoRow from './shared/InfoRow'
import SimpleList from './shared/SimpleList'
import UserInfoWithIcon from './shared/UserInfoWithIcon'

const Header = ({ children }) => (
  <div className='uppercase'>
    <h2 style={{ color: 'var(--heading-c)' }} className='heading font-semibold'>
      {children}
    </h2>
  </div>
)

export const CommonTile = ({ top, main, bottom, className = 'mt-1' }) => {
  return (
    <div className={className}>
      <div className='text-xs text-neutral'>{top}</div>
      <h3 className='text-sm text-black tracking-wider font-semibold'>{main}</h3>
      <div className='text-xs text-neutral'>{bottom}</div>
    </div>
  )
}

const ContactListItemRight = ({ icon, value }) => (
  <div className='flex gap-x-2 justify-end'>
    <p className='text-xs text-neutral text-right'>{value}</p>
    <div>
      <div className='contact-icon-color w-4 h-4'>{icon}</div>
    </div>
  </div>
)

const TemplateU = ({ profile }) => {
  return (
    <main id='U' className='flex flex-col bg-white'>
      {/* top row */}
      <section className='flex'>
        {/* left box */}
        <section className='relative text-on-primary bg-primary w-1_2 p-4 rounded-md'>
          <div className='bg-white p-0_half absolute dimond rounded rotate-45'>
            <div className='bg-accent w-full h-full rounded'></div>
          </div>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <div className='relative flex-1 self-center'>
                <h1 className='name font-thin leading-none text-on-primary'>{p.name}</h1>
                <h3 className='text-sm mt-1 text-accent tracking-widest uppercase'>{p.subTitle}</h3>
              </div>
            )}
          </PersonalDetails>

          <Objective title='Profile' text={profile.objective}>
            {(_, text) => (
              <div className='mt-2'>
                <p className='text-xs mt-1 text-neutral'>{text}</p>
              </div>
            )}
          </Objective>
        </section>
        {/* right box */}
        <section className='w-1_2 py-3 pl-3'>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <UserInfoWithIcon
                containerClasses='h-full w-full flex flex-col justify-end items-end gap-y-1_half'
                data={p}
                renderItem={ContactListItemRight}
              />
            )}
          </PersonalDetails>
        </section>
      </section>

      <section className='flex-1 flex'>
        {/* left col */}
        <section className='space-y-5 w-1_2 pt-3 pr-3 pb-3' style={{ '--list-text-n': 'var(--neutral)' }}>
          <Experience title='Work Experience' experiences={profile.experiences}>
            {(title, experiences) => (
              <section>
                <Header>{title}</Header>
                <div className='space-y-2'>
                  {experiences.map((item, i) => (
                    <CommonTile
                      key={i}
                      top={
                        <span>
                          {item.companyName} &nbsp;
                          <InfoRow className='inline-flex' left={item.startDate} right={item.endDate} separator='-' />
                        </span>
                      }
                      main={item.jobTitle}
                      bottom={item.details}
                    />
                  ))}
                </div>
              </section>
            )}
          </Experience>

          <Education educations={profile.educations}>
            {(title, educations) => (
              <section>
                <Header>{title}</Header>
                {educations.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.schoolOrUniversity}
                    main={item.courseOrDegree}
                    bottom={<InfoRow className='inline-flex' left={item.grade} right={item.year} />}
                  />
                ))}
              </section>
            )}
          </Education>

          <Achievements items={profile.achievements}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <SimpleList col='grid-cols-1' items={items} />
              </div>
            )}
          </Achievements>

          <AdditionalInformation title='Info' text={profile.additionalInformation}>
            {(title, text) => (
              <div>
                <Header>{title}</Header>
                <p className='text-xs text-neutral'>{text}</p>
              </div>
            )}
          </AdditionalInformation>
        </section>

        {/* right col */}
        <section className='w-1_2 space-y-5 bg-secondary p-3 rounded-md'>
          <Projects projects={profile.projects}>
            {(title, projects) => (
              <section>
                <Header>{title}</Header>
                <div className='space-y-2'>
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

          <Skills items={profile.skills}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <div className='space-y-2'>
                  {items.map((item, i) => (
                    <div className='rounded mr-2 inline-block flex-1 bg-tertiary px-2 py-1' key={i}>
                      <p className='text-xs text-on-primary'>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Skills>

          <References references={profile.references}>
            {(title, references) => (
              <section>
                <Header>{title}</Header>
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

          <Languages items={profile.languages}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <SimpleList col='grid-cols-2' items={items} />
              </div>
            )}
          </Languages>

          <Interests items={profile.interests}>
            {(title, items) => (
              <div>
                <Header>{title}</Header>
                <SimpleList items={items} />
              </div>
            )}
          </Interests>
        </section>
      </section>
    </main>
  )
}

export default TemplateU
