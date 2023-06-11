import React from 'react'
import { CommonTile } from './Q'
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
import SimpleList from './shared/SimpleList'
import UserInfoWithIcon, { ContactListItem } from './shared/UserInfoWithIcon'

const Header = ({ children }) => (
  <div className='bg-primary pl-2 rounded-sm flex'>
    <h2
      style={{ paddingTop: '6px', paddingBottom: '2px' }}
      className='heading text-on-primary font-semibold uppercase leading-none'
    >
      {children}
    </h2>
  </div>
)

const Card = ({ children, title, style }) => (
  <div style={style} className='bg-white p-1_half rounded-md border border-gray-100'>
    {title && <Header>{title}</Header>}
    <div className='px-1_half'>{children}</div>
  </div>
)

const TemplateV = ({ profile }) => {
  return (
    <main id='V' className='grid grid-cols-2 gap-x-3' style={{ gridTemplateColumns: '1fr 2fr' }}>
      {/* left col */}
      <section className='space-y-2_half'>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div>
              {/* img */}
              <div
                className='bg-gray-300 mx-auto aspect-square relative z-10 rounded-full overflow-hidden'
                style={{ width: '120px', marginBottom: -30 }}
              >
                <PersonalDetails personalDetails={profile.personalDetails}>
                  {(p) => p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
                </PersonalDetails>
              </div>
              <Card>
                <div className='mt-8'>
                  <UserInfoWithIcon
                    containerClasses='flex flex-col gap-y-2 mt-1'
                    data={p}
                    renderItem={ContactListItem}
                  />
                </div>
              </Card>
            </div>
          )}
        </PersonalDetails>

        <Objective title='Profile' text={profile.objective}>
          {(title, text) => (
            <Card title={title}>
              <p className='text-xs mt-2 text-on-primary'>{text}</p>
            </Card>
          )}
        </Objective>

        <Skills title='Skills' items={profile.skills}>
          {(title, items) => (
            <Card title={title}>
              <RatingList items={items} />
            </Card>
          )}
        </Skills>

        <Languages items={profile.languages}>
          {(title, items) => (
            <Card title={title}>
              <SimpleList col='grid-cols-2 mt-1' items={items} />
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
              <SimpleList col='grid-cols-1 mt-1' items={items} />
            </Card>
          )}
        </Interests>
      </section>

      {/* right col */}
      <section className='space-y-2_half'>
        {/* top */}
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <div className='px-4 py-3 flex flex-col items-center text-on-primary'>
              <h1 className='name font-semibold'>{p.name}</h1>
              <hr className='border-gray-300 border-b-2 opacity-70' style={{ width: '80%' }} />
              <h3 className='mt-1 opacity-80 tracking-widest'>{p.subTitle}</h3>
            </div>
          )}
        </PersonalDetails>

        <Education educations={profile.educations}>
          {(title, educations) => (
            <Card title={title}>
              {educations.map((item, i) => (
                <CommonTile
                  gridCols={3}
                  key={i}
                  main={item.courseOrDegree}
                  subTitle={item.schoolOrUniversity}
                  bottom={<InfoRow className='inline-flex' left={item.grade} right={item.year} />}
                />
              ))}
            </Card>
          )}
        </Education>

        <Experience title='Work Experience' experiences={profile.experiences}>
          {(title, experiences) => (
            <Card title={title}>
              {experiences.map((item, i) => (
                <CommonTile
                  key={i}
                  main={item.jobTitle}
                  subTitle={item.companyName}
                  right={<InfoRow className='inline-flex' left={item.startDate} right={item.endDate} />}
                  bottom={item.details}
                />
              ))}
            </Card>
          )}
        </Experience>

        <Projects projects={profile.projects}>
          {(title, projects) => (
            <Card title={title}>
              {projects.map((item, i) => (
                <CommonTile key={i} main={item.title} bottom={item.details} />
              ))}
            </Card>
          )}
        </Projects>

        <References references={profile.references}>
          {(title, references) => (
            <Card title={title}>
              {references.map((item, i) => (
                <CommonTile
                  key={i}
                  main={item.jobTitle}
                  subTitle={item.companyName}
                  bottom={<InfoRow className='inline-flex' left={item.email} right={item.phone} />}
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

export default TemplateV
