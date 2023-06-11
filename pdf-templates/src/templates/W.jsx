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
  <div
    className='bg-primary pl-2 rounded-sm'
    style={{
      clipPath: 'polygon(0% 0%, 100% 0, 96% 51%, 100% 100%, 0% 100%)',
    }}
  >
    <h2
      style={{ paddingTop: '6px', paddingBottom: '2px' }}
      className='heading text-on-primary font-semibold uppercase leading-none'
    >
      {children}
    </h2>
  </div>
)

const Card = ({ children, title, style, border = false }) => {
  const borderStyle = border
    ? 'px-2 ml-1 relative border-primary before:absolute before:top-0 before:-left-1 before:w-2 before:h-2 before:bg-white'
    : 'px-2'

  return (
    <div style={style} className='p-1_half'>
      {title && <Header>{title}</Header>}
      <div className={borderStyle} style={{ borderLeftWidth: border && 1.5, marginTop: '' }}>
        {children}
      </div>
    </div>
  )
}

const CommonTile = ({ main, top, subtitle, bottom }) => {
  return (
    <div className='mt-2 '>
      <div className='flex justify-between relative'>
        <span className='absolute rounded-full w-1_half h-1_half bg-primary' style={{ top: '6px', left: '-11.8px' }} />
        <div className='text-xs text-muted'>{top}</div>
      </div>

      <div className=''>
        <div className='text-xs text-neutral font-bold uppercase'>
          {main}
          {subtitle && ','}
          <span className='pl-1 font-normal' style={{ fontSize: '10px' }}>
            {subtitle}
          </span>
        </div>
      </div>
      <div className='text-xs text-neutral col-span-full'>{bottom}</div>
    </div>
  )
}

const TemplateW = ({ profile }) => {
  return (
    <main id='W' className='bg-white grid grid-cols-2 gap-x-1' style={{ gridTemplateColumns: '3fr 4fr' }}>
      {/* left col */}
      <section className='space-y-2_half'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='pt-6 relative'>
              <span
                className='absolute top-0 left-1_2 -translate-x-1_2 bg-primary opacity-30'
                style={{ width: '90px', height: '50%' }}
              />
              <div className='text-center relative z-10'>
                <h1 className='name text-sm font-semibold'>{p.name}</h1>
                <h3 className='mt-2 tracking-wide'>{p.subTitle}</h3>
              </div>
              <div
                className='bg-gray-300 mt-2 mb-3 mx-auto aspect-square relative z-10 rounded-full overflow-hidden'
                style={{ width: '120px' }}
              >
                {p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
              </div>

              <Card title='Contacts'>
                <UserInfoWithIcon containerClasses='flex flex-col gap-y-2 mt-3' data={p} renderItem={ContactListItem} />
              </Card>
            </div>
          )}
        </PersonalDetails>

        <Objective text={profile.objective}>
          {(title, text) => (
            <Card title={title}>
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

        <Languages items={profile.languages}>
          {(title, items) => (
            <Card title={title}>
              <FlexList classNames='mt-2' items={items} />
            </Card>
          )}
        </Languages>

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
              <FlexList classNames='mt-2' items={items} />
            </Card>
          )}
        </Interests>
      </section>

      {/* right col */}
      <section className='space-y-2_half'>
        {/* top */}
        <Education educations={profile.educations}>
          {(title, educations) => (
            <Card title={title} border>
              {educations.map((item, i) => (
                <CommonTile
                  gridCols={3}
                  key={i}
                  top={item.year}
                  main={item.courseOrDegree}
                  subtitle={item.schoolOrUniversity}
                  bottom={`GPA: ${item.grade}`}
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
                  main={item.jobTitle}
                  subtitle={item.companyName}
                  top={<InfoRow className='inline-flex' left={item.startDate} right={item.endDate} />}
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

        <AdditionalInformation text={profile.additionalInformation}>
          {(title, text) => (
            <Card title={title}>
              <p className='text-xs mt-1 text-neutral'>{text}</p>
            </Card>
          )}
        </AdditionalInformation>
      </section>
    </main>
  )
}

export default TemplateW
