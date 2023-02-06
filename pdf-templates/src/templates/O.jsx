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
import RatingList from './shared/RatingList'
import SimpleList from './shared/SimpleList'
import InfoRow from './shared/InfoRow'
import { isEmpty } from 'underscore'

const HeaderLeft = ({ children }) => (
  <div className='relative text-center'>
    <div className='absolute w-full top-1_2 bg-white h-1 flex-1 mb-[8px] opacity-10' />
    <h2 className='heading leading-none relative text-on-primary font-semibold inline-block bg-primary px-1_half'>
      {children}
    </h2>
  </div>
)

const HeaderRight = ({ children }) => (
  <div className='flex justify-end mb-2'>
    <div
      className='w-3_5 pl-7 py-0_half bg-primary rounded-sm'
      style={{
        '--v': '8%',
        clipPath: 'polygon(var(--v) 0%, 100% 0%, 100% 100%, var(--v) 100%, 0% 50%)',
      }}
    >
      <h2 className='heading text-on-primary font-semibold leading-0 uppercase'>{children}</h2>
    </div>
  </div>
)

const CommonTile = ({ top, main, bottom, className = 'mt-1' }) => {
  return (
    <div className={className}>
      <div className='text-xs text-muted'>{top}</div>
      <div className='text-sm text-black font-bold'>{main}</div>
      <div className='text-xs text-neutral'>{bottom}</div>
    </div>
  )
}

function UserInfo({ title, name }) {
  if (isEmpty(name)) return null
  return (
    <>
      <p className='text-xs text-white text-opacity-70'>{title}</p>
      <p className='text-xs text-white text-opacity-70'>:&nbsp;{name}</p>
    </>
  )
}

const TemplateO = ({ profile }) => {
  return (
    <main id='O' className='flex-1 flex bg-white'>
      {/* left col */}
      <section
        className='w-2_5 px-3 bg-primary el-drop-shasow space-y-6'
        style={{ '--list-text-c': 'var(--on-primary)' }}
      >
        <div className='g-center'>
          <div className='bg-white rounded-full overflow-hidden mt-8' style={{ width: '150px', height: '150px' }}>
            <PersonalDetails personalDetails={profile.personalDetails}>
              {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
            </PersonalDetails>
          </div>
        </div>

        <Skills items={profile.skills}>
          {(title, items) => (
            <div>
              <HeaderLeft>{title}</HeaderLeft>
              <RatingList className='mt-1' items={items} />
            </div>
          )}
        </Skills>

        <Achievements items={profile.achievements}>
          {(title, items) => (
            <div>
              <HeaderLeft>{title}</HeaderLeft>
              <SimpleList col='grid-cols-1 mt-1' items={items} />
            </div>
          )}
        </Achievements>

        <Languages items={profile.languages}>
          {(title, items) => (
            <div>
              <HeaderLeft>{title}</HeaderLeft>
              <RatingList className='mt-1' items={items} />
            </div>
          )}
        </Languages>

        <Interests items={profile.interests}>
          {(title, items) => (
            <div>
              <HeaderLeft>{title}</HeaderLeft>
              <SimpleList col='grid-cols-1 mt-1' items={items} />
            </div>
          )}
        </Interests>

        <References references={profile.references}>
          {(title, references) => (
            <section className='left-common-tile'>
              <HeaderLeft>{title}</HeaderLeft>
              <div className='space-y-3'>
                {references.map((item, i) => (
                  <CommonTile
                    key={i}
                    top={item.companyName}
                    main={item.jobTitle}
                    bottom={<InfoRow left={item.email} right={item.phone} />}
                  />
                ))}
              </div>
            </section>
          )}
        </References>
      </section>

      {/* right col */}
      <section className='flex-1 space-y-3 pl-3'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div
              className='bg-secondary pl-6 pt-10 pb-8 -ml-3'
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 87%, 0% 100%)' }}
            >
              <h1 className='name text-on-secondary'>{p.name}</h1>
              <h3 className='text-sm opacity-50 text-on-secondary tracking-widest font-semibold uppercase -mt-1'>
                {p.subTitle}
              </h3>
              <div className='mt-2'>
                <div style={{ gridTemplateColumns: 'auto 1fr' }} className='grid gap-x-1 gap-y-0_half'>
                  <UserInfo title='Phone' name={p.phone} />
                  <UserInfo title='Email' name={p.email} />
                  <UserInfo title='Address' name={p.address} />
                </div>
              </div>
            </div>
          )}
        </PersonalDetails>

        <Objective title='Profile' text={profile.objective}>
          {(title, text) => (
            <div>
              <HeaderRight>{title}</HeaderRight>
              <p className='text-xs mt-1 text-neutral'>{text}</p>
            </div>
          )}
        </Objective>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <section className=''>
              <HeaderRight>{title}</HeaderRight>
              <div className='space-y-3'>
                {educations.map((item, i) => (
                  <CommonTile
                    className='mt-2'
                    key={i}
                    top={item.schoolOrUniversity}
                    main={item.courseOrDegree}
                    bottom={<InfoRow left={item.grade} right={item.year} />}
                  />
                ))}
              </div>
            </section>
          )}
        </Education>

        <Experience experiences={profile.experiences}>
          {(title, experiences) => (
            <section>
              <HeaderRight>{title}</HeaderRight>
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
              <HeaderRight>{title}</HeaderRight>
              {projects.map((item, i) => (
                <div key={i} className='mt-1'>
                  <h3 className='text-sm text-black font-bold'>{item.title}</h3>
                  <p className='text-xs text-neutral'>{item.details}</p>
                </div>
              ))}
            </section>
          )}
        </Projects>

        <AdditionalInformation title='Info' text={profile.additionalInformation}>
          {(title, text) => (
            <div>
              <HeaderRight>{title}</HeaderRight>
              <p className='text-xs text-neutral'>{text}</p>
            </div>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateO
