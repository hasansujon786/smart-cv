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
  <div className='uppercase'>
    <h2 style={{ color: 'var(--heading-c)' }} className='heading font-semibold'>
      {children}
    </h2>
  </div>
)

const CommonTile = ({ top, main, bottom, className = 'mt-1' }) => {
  return (
    <div className={className}>
      <p className='text-xs text-neutral'>{top}</p>
      <h3 className='text-sm text-black tracking-wider font-semibold'>{main}</h3>
      <p className='text-xs text-neutral'>{bottom}</p>
    </div>
  )
}

const TemplateT = ({ profile }) => {
  return (
    <main id='T' className='flex flex-col bg-white'>
      {/* top row */}
      <section className='flex relative py-8'>
        <div
          className='bg-primary bottom-0 right-0 absolute w-full h-full'
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)' }}
        />
        {/* intro */}
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='pl-10 relative flex-1 self-center'>
              <h1 className='name font-semibold text-on-primary'>{p.name}</h1>
              <h3 className='text-sm opacity-70 text-on-primary tracking-widest font-semibold uppercase'>
                {p.subTitle}
              </h3>
            </div>
          )}
        </PersonalDetails>

        {/* image */}
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='w-1_3 pl-6 relative self-end' style={{ height: '120px' }}>
              {p.profileImage && (
                <div
                  className='bg-gray-200 rounded-full overflow-hidden'
                  style={{ width: '120px', height: '100%', marginTop: 30 }}
                >
                  <img src={p.profileImageBase64} alt='profile image' />
                </div>
              )}
            </div>
          )}
        </PersonalDetails>
      </section>

      <section className='flex-1 flex gap-4 px-0 pt-4'>
        <section className='w-2_5 space-y-5' style={{ '--list-text-c': 'var(--neutral)' }}>
          {/* left col */}
          <PersonalDetails personalDetails={profile.personalDetails}>
            {(p) => (
              <div className='mr-2'>
                <Header>Contact</Header>
                <div className='space-y-0_half mt-1'>
                  <p className='text-xs text-neutral'>Phone: {p.phone}</p>
                  <p className='text-xs text-neutral'>Email: {p.email}</p>
                  <p className='text-xs text-neutral'>Address: {p.address}</p>
                </div>
              </div>
            )}
          </PersonalDetails>

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

        <section className='flex-1 pt-1 space-y-5'>
          {/* right col */}
          <Objective title='Profile' text={profile.objective}>
            {(title, text) => (
              <div>
                <Header>{title}</Header>
                <p className='text-xs mt-1 text-neutral'>{text}</p>
              </div>
            )}
          </Objective>

          <Experience experiences={profile.experiences}>
            {(title, experiences) => (
              <section>
                <Header>{title}</Header>
                {experiences.map((item, i) => (
                  <CommonTile
                    className='mt-2'
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
                <Header>{title}</Header>
                {projects.map((item, i) => (
                  <div key={i} className='mt-1'>
                    <h3 className='text-sm text-black tracking-wider font-semibold'>{item.title}</h3>
                    <p className='text-xs text-neutral'>{item.details}</p>
                  </div>
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
                    className='mt-2'
                    key={i}
                    top={item.companyName}
                    main={item.jobTitle}
                    bottom={<InfoRow className='inline-flex' left={item.email} right={item.phone} />}
                  />
                ))}
              </section>
            )}
          </References>

          <AdditionalInformation title='Info' text={profile.additionalInformation}>
            {(title, text) => (
              <div>
                <Header>{title}</Header>
                <p className='text-xs text-neutral'>{text}</p>
              </div>
            )}
          </AdditionalInformation>
        </section>
      </section>
    </main>
  )
}

export default TemplateT
