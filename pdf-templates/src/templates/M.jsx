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

const CommonTile = ({ top, main, bottom }) => {
  return (
    <div className='mt-2'>
      <div className='text-xs text-muted'>{top}</div>
      <h3 className='text-sm text-neutral font-bold'>{main}</h3>
      <div className='text-xs text-muted'>{bottom}</div>
    </div>
  )
}

const HeaderLeft = ({ children }) => (
  <div
    className='flex justify-center items-center mb-2 relative h-7 bg-primary mr-5 rounded-r-md'
    style={{ marginLeft: '-7px' }}
  >
    <h2 className='heading font-semibold uppercase text-on-primary'>{children}</h2>
    <span
      style={{ borderWidth: '5px', bottom: '-5px', left: '2px', width: '5px', height: '5px' }}
      className='absolute rotate-45 border-transparent border-b-accent'
    />
  </div>
)

const HeaderRight = ({ children }) => (
  <div className='flex items-center pl-5 h-7 bg-primary rounded-l-full'>
    <h2 className='heading font-semibold uppercase text-on-primary'>{children}</h2>
  </div>
)

const TemplateM = ({ profile }) => {
  return (
    <main id='M' className='flex relative flex-col bg-white'>
      <div className='absolute w-2_5 h-full px-4'>
        {/* left col */}
        <section className='bg-secondary h-full'>
          <section className='py-8 plae-items-center place-content-center grid'>
            <div className='relative ' style={{ width: '150px', height: '150px' }}>
              <span className='absolute left-0 top-0 opacity-40 bg-accent rounded-full w-6 h-6' />
              <span className='absolute right-0 bottom-0 opacity-40 bg-accent rounded-full w-10 h-10' />
              <div className='bg-accent rounded-full overflow-hidden relative w-full h-full'>
                <PersonalDetails personalDetails={profile.personalDetails}>
                  {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
                </PersonalDetails>
              </div>
            </div>
          </section>

          <div className='text-gray-200 space-y-4' style={{ '--list-text-c': 'var(--on-secondary)' }}>
            <PersonalDetails personalDetails={profile.personalDetails}>
              {(p) => (
                <section>
                  <HeaderLeft>Contact</HeaderLeft>
                  <div className='space-y-1 px-4'>
                    <p className='text-xs text-on-secondary'>{p.phone}</p>
                    <p className='text-xs text-on-secondary'>{p.email}</p>
                    <p className='text-xs text-on-secondary'>{p.address}</p>
                  </div>
                </section>
              )}
            </PersonalDetails>

            <Skills items={profile.skills}>
              {(title, items) => (
                <div>
                  <HeaderLeft>{title}</HeaderLeft>
                  <SimpleList col='grid-cols-1 px-4' items={items} />
                </div>
              )}
            </Skills>

            <Languages items={profile.languages}>
              {(title, items) => (
                <div>
                  <HeaderLeft>{title}</HeaderLeft>
                  <SimpleList col='grid-cols-1 px-4' items={items} />
                </div>
              )}
            </Languages>

            <Achievements items={profile.achievements}>
              {(title, items) => (
                <div>
                  <HeaderLeft>{title}</HeaderLeft>
                  <SimpleList col='grid-cols-1 px-4' items={items} />
                </div>
              )}
            </Achievements>

            <Interests items={profile.interests}>
              {(title, items) => (
                <div>
                  <HeaderLeft>{title}</HeaderLeft>
                  <SimpleList col='grid-cols-1 px-4' items={items} />
                </div>
              )}
            </Interests>
          </div>
        </section>
      </div>

      <section className='bg-primary flex'>
        <div className='w-2_5'></div>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='py-12'>
              <h1 className='name text-on-primary'>{p.name}</h1>
              <h3 className='text-sm opacity-40 tracking-widest uppercase mt-1 text-on-primary'>{p.subTitle}</h3>
            </div>
          )}
        </PersonalDetails>
      </section>

      <div className='flex flex-1'>
        <div className='w-2_5' />
        <section className='flex-1 pt-5 space-y-4'>
          {/* <!-- right col --> */}
          <Objective text={profile.objective}>
            {(title, text) => (
              <div title='Profile' className='space-y-2'>
                <HeaderRight>{title}</HeaderRight>
                <p className='text-xs text-muted'>{text}</p>
              </div>
            )}
          </Objective>

          <Experience experiences={profile.experiences}>
            {(title, experiences) => (
              <section>
                <HeaderRight>{title}</HeaderRight>
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
                <HeaderRight>{title}</HeaderRight>
                <div className='mt-2' />
                {projects.map((item, i) => (
                  <div key={i}>
                    <h3 className='text-sm text-neutral font-bold'>{item.title}</h3>
                    <p className='text-xs text-muted'>{item.details}</p>
                  </div>
                ))}
              </section>
            )}
          </Projects>

          <Education educations={profile.educations}>
            {(title, educations) => (
              <section>
                <HeaderRight>{title}</HeaderRight>
                {educations.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.schoolOrUniversity}
                    main={<InfoRow left={item.courseOrDegree} right={item.year} separator='-' />}
                    bottom={item.grade}
                  />
                ))}
              </section>
            )}
          </Education>

          <References references={profile.references}>
            {(title, references) => (
              <section>
                <HeaderRight>{title}</HeaderRight>
                {references.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.companyName}
                    main={item.jobTitle}
                    bottom={<InfoRow left={item.email} right={item.phone} />}
                  />
                ))}
              </section>
            )}
          </References>

          <AdditionalInformation text={profile.additionalInformation}>
            {(title, text) => (
              <div>
                <HeaderRight>{title}</HeaderRight>
                <p className='text-xs mt-2 text-muted'>{text}</p>
              </div>
            )}
          </AdditionalInformation>
        </section>
      </div>
    </main>
  )
}

export default TemplateM
