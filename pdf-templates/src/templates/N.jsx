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

const HeaderLeft = ({ children }) => (
  <div className='h-8 pl-5 bg-primary rounded-r-full flex items-center'>
    <h2 className='heading text-on-primary font-semibold'>{children}</h2>
  </div>
)

const HeaderRight = ({ children }) => (
  <div>
    <h2 className='heading text-primary font-semibold leading-0'>{children}</h2>
    <hr className='bg-primary opacity-70 h-0_half rounded-full border-none' />
  </div>
)

const CommonTile = ({ top, main, bottom }) => {
  return (
    <div className='mt-1'>
      <p className='text-xs text-muted'>{top}</p>
      <h3 className='text-sm text-black font-bold'>{main}</h3>
      <p className='text-xs text-neutral'>{bottom}</p>
    </div>
  )
}

const TemplateN = ({ profile }) => {
  return (
    <main id='N' className='relative flex bg-white'>
      {/* left col */}
      <section className='w-2_5 flex flex-col'>
        {/* img */}
        <section>
          <div
            className='bg-primary flex aspect-square items-center justify-center'
            style={{ borderBottomRightRadius: '120px' }}
          >
            <div
              style={{ width: '150px', height: '150px' }}
              className='bg-white ring-8 ring-accent relative rounded-full overflow-hidden'
            >
              <PersonalDetails personalDetails={profile.personalDetails}>
                {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
              </PersonalDetails>
            </div>
          </div>
        </section>

        {/* left content */}
        <div className='pl-5 pt-6 flex flex-col flex-1 relative' style={{ '--list-text-c': 'var(--neutral)' }}>
          <div className='bg-primary absolute top-0 left-0 h-full' style={{ width: 22 }}>
            <span className='absolute h-4 w-full bg-primary left-0' style={{ top: -2 }} />
          </div>
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <div>
                <HeaderLeft>Contact</HeaderLeft>
                <div className='px-4 pt-2 pb-3 space-y-0_half'>
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
                <HeaderLeft>{title}</HeaderLeft>
                <div className='px-4 pt-2 pb-3'>
                  <SimpleList col='grid-cols-1' items={items} />
                </div>
              </div>
            )}
          </Skills>

          <Languages items={profile.languages}>
            {(title, items) => (
              <div>
                <HeaderLeft>{title}</HeaderLeft>
                <div className='px-4 pt-2 pb-3 '>
                  <SimpleList col='grid-cols-1' items={items} />
                </div>
              </div>
            )}
          </Languages>

          <Achievements items={profile.achievements}>
            {(title, items) => (
              <div>
                <HeaderLeft>{title}</HeaderLeft>
                <div className='px-4 pt-2 pb-3 '>
                  <SimpleList col='grid-cols-1' items={items} />
                </div>
              </div>
            )}
          </Achievements>

          <Interests items={profile.interests}>
            {(title, items) => (
              <div>
                <HeaderLeft>{title}</HeaderLeft>
                <div className='px-4 pt-2 pb-3 '>
                  <SimpleList col='grid-cols-1' items={items} />
                </div>
              </div>
            )}
          </Interests>
        </div>
      </section>

      {/* right col */}
      <section className='flex-1'>
        <div className='bg-primary h-6 relative -left-1' style={{ width: '102%' }} />
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <section className='mx-5 mt-5 text-center'>
              <h1 className='name'>{p.name}</h1>
              <span className='flex items-center mt-1 text-primary'>
                <span className='bg-current opacity-70 h-1_half w-1_half rounded-full' />
                <hr className='bg-primary opacity-70 flex-1 h-0_half rounded-full border-none' />
                <span className='bg-current opacity-70 h-1_half w-1_half rounded-full' />
              </span>
              <h3 className='text-sm text-muted opacity-60 tracking-widest font-semibold uppercase mt-1'>
                {p.subTitle}
              </h3>
            </section>
          )}
        </PersonalDetails>

        {/* right contents */}
        <section className='mx-5 mt-8 space-y-2'>
          <Objective title='Profile' text={profile.objective}>
            {(title, text) => (
              <div>
                <HeaderRight>{title}</HeaderRight>
                <p className='text-xs mt-1 text-neutral'>{text}</p>
              </div>
            )}
          </Objective>

          <Experience title='Work Experience' experiences={profile.experiences}>
            {(title, experiences) => (
              <section>
                <HeaderRight>{title}</HeaderRight>
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
              </section>
            )}
          </Experience>

          <Projects projects={profile.projects}>
            {(title, projects) => (
              <section>
                <HeaderRight>{title}</HeaderRight>
                <div className='mt-1' />
                {projects.map((item, i) => (
                  <div key={i}>
                    <h3 className='text-sm text-black font-bold'>{item.title}</h3>
                    <p className='text-xs text-neutral'>{item.details}</p>
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
                    top={<InfoRow left={item.schoolOrUniversity} right={item.year} />}
                    main={item.courseOrDegree}
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
                <p className='text-xs mt-1 text-neutral'>{text}</p>
              </div>
            )}
          </AdditionalInformation>
        </section>
      </section>
    </main>
  )
}

export default TemplateN
