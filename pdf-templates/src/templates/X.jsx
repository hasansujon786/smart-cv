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
import RatingList from './shared/RatingList'
import SimpleList, { FlexList } from './shared/SimpleList'
import UserInfoWithIcon, { ContactListItem } from './shared/UserInfoWithIcon'

const Header = ({ children }) => (
  <div className=''>
    <h2 className='heading text-black text-opacity-70 font-bold'>{children}</h2>
  </div>
)

export const Card = ({ children, title, style, border = false }) => {
  const borderStyle = border
    ? 'pl-2_half ml-1_half relative border-secondary before:absolute before:top-0 before:-left-1 before:w-2 before:h-2 before:bg-white'
    : undefined

  return (
    <div style={style} className='pt-1_half'>
      {title && <Header>{title}</Header>}
      <div className={borderStyle} style={{ borderLeftWidth: border && 1.5 }}>
        {children}
      </div>
    </div>
  )
}

const CommonTile = ({ main, subtitle, bottom }) => {
  return (
    <div className='mb-2 mt-1 relative'>
      <span className='absolute py-1 bg-white' style={{ top: '-2px', left: '-14.5px' }}>
        <div className='rounded-sm w-2 h-2 bg-secondary rotate-45' />
      </span>

      <div className='text-sm text-neutral font-bold uppercase leading-none'>{main}</div>
      <div className='flex text-xs font-medium text-primary'>{subtitle}</div>
      <div className='text-xs text-neutral'>{bottom}</div>
    </div>
  )
}

const TemplateX = ({ profile }) => {
  return (
    <main
      id='X'
      className='grid gap-x-4 h-full'
      style={{ gridTemplateColumns: '3fr 5fr', gridTemplateRows: 'auto 1fr' }}
    >
      <PersonalDetails personalDetails={profile.personalDetails}>
        {(p) => (
          <section className='col-span-full flex gap-x-4 justify-between'>
            <div className='inline-flex flex-col'>
              <div>
                <div className='inline-flex flex-col'>
                  <h1 className='name text-sm font-semibold'>{p.name}</h1>
                  <h3 className='mt-2 opacity-70 tracking-wide'>{p.subTitle}</h3>
                  <hr className='mt-1 border-t-2 border-primary opacity-50' style={{ width: 'calc(100% + 10px)' }} />
                </div>
              </div>

              <UserInfoWithIcon
                containerClasses='flex flex-wrap gap-x-4 gap-y-2 mt-1_half'
                data={p}
                renderItem={ContactListItem}
              />
            </div>

            <div className='flex flex-col justify-center mr-3'>
              <div
                className='bg-gray-300 aspect-square rounded-full overflow-hidden border-4 border-primary'
                style={{ width: '120px' }}
              >
                {p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
              </div>
            </div>
          </section>
        )}
      </PersonalDetails>
      <section className=''>
        <Objective text={profile.objective}>
          {(_, text) => (
            <Card title='Profile'>
              <p className='text-xs mt-2 text-on-primary'>{text}</p>
            </Card>
          )}
        </Objective>
        {/* // TODO: update section style */}
        <Skills items={profile.skills}>
          {(title, items) => (
            <Card title={title}>
              <RatingList items={items} />
            </Card>
          )}
        </Skills>

        <Achievements items={profile.achievements}>
          {(title, items) => (
            <Card title={title}>
              <SimpleList col='grid-cols-1 mt-1' items={items} />
            </Card>
          )}
        </Achievements>

        <Interests items={profile.interests}>
          {(title, items) => (
            <Card title={title}>
              <FlexList items={items} />
            </Card>
          )}
        </Interests>

        <Languages items={profile.languages}>
          {(title, items) => (
            <Card title={title}>
              <FlexList items={items} />
            </Card>
          )}
        </Languages>

        <AdditionalInformation text={profile.additionalInformation}>
          {(title, text) => (
            <Card title={title}>
              <p className='text-xs mt-1 text-neutral'>{text}</p>
            </Card>
          )}
        </AdditionalInformation>
      </section>

      <section className=''>
        <Education educations={profile.educations}>
          {(title, educations) => (
            <Card title={title} border>
              {educations.map((item, i) => (
                <CommonTile
                  gridCols={3}
                  key={i}
                  main={item.courseOrDegree}
                  subtitle={
                    <InfoRow className='inline-flex' separator='|' left={item.schoolOrUniversity} right={item.year} />
                  }
                  bottom={item.grade && `GPA: ${item.grade}`}
                />
              ))}
            </Card>
          )}
        </Education>

        <Experience title='Work Experience' experiences={profile.experiences}>
          {(title, experiences) => (
            <Card title={title} border>
              {experiences.map((item, i) => (
                <CommonTile
                  key={i}
                  main={item.companyName}
                  subtitle={
                    <InfoRow
                      className='inline-flex'
                      separator='|'
                      left={item.jobTitle}
                      right={
                        item.startDate || item.endDate ? (
                          <InfoRow className='inline-flex' separator='-' left={item.startDate} right={item.endDate} />
                        ) : null
                      }
                    />
                  }
                  bottom={item.details}
                />
              ))}
            </Card>
          )}
        </Experience>

        <Projects projects={profile.projects}>
          {(title, projects) => (
            <Card title={title} border>
              {projects.map((item, i) => (
                <CommonTile key={i} main={item.title} bottom={item.details} />
              ))}
            </Card>
          )}
        </Projects>

        <References references={profile.references}>
          {(title, references) => (
            <Card title={title} border>
              {references.map((item, i) => (
                <CommonTile
                  main={item.jobTitle}
                  key={i}
                  top={item.companyName}
                  bottom={<InfoRow className='inline-flex' left={item.email} subtitle={item.phone} />}
                />
              ))}
            </Card>
          )}
        </References>
      </section>
    </main>
  )
}

export default TemplateX
