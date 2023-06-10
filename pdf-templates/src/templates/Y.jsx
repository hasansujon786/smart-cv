import React from 'react'
import { Card } from './X'
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
import PillList from './shared/PillList'
import SimpleList, { FlexList } from './shared/SimpleList'
import UserInfoWithIcon, { ContactListItem } from './shared/UserInfoWithIcon'

const CommonTile = ({ main, subtitle, bottom }) => {
  return (
    <div className='mb-2 mt-1 relative'>
      <span className='absolute py-1 bg-white' style={{ top: '-2px', left: '-13.5px' }}>
        <div className='rounded-full w-1_half h-1_half bg-secondary' />
      </span>

      <div className='text-sm text-neutral font-bold uppercase leading-none'>{main}</div>
      <div className='flex text-xs font-medium text-primary'>{subtitle}</div>
      <div className='text-xs text-neutral'>{bottom}</div>
    </div>
  )
}

const TemplateY = ({ profile }) => {
  return (
    <main id='Y' className='grid gap-x-4 h-full' style={{ gridTemplateColumns: '3fr 5fr', gridTemplateRows: '1fr' }}>
      <section className=''>
        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <section>
              <div
                style={{ width: '140px' }}
                className='image-frame-square aspect-square relative border-4 border-primary p-1'
              >
                <div className='bg-gray-100 border relative z-10 flex-1 h-full w-full'>
                  {p.profileImage && <img src={p.profileImageBase64} alt='profile image' />}
                </div>
              </div>

              <div className='mt-3 flex flex-col gap-y-1'>
                <h1 className='name text-sm font-semibold leading-6'>{p.name}</h1>
                <p className='tracking-wide text-sm font-medium text-primary'>{p.subTitle}</p>
                <hr className='border-t-2 border-primary opacity-40' style={{ width: 'calc(100% + 4px)' }} />
              </div>
            </section>
          )}
        </PersonalDetails>

        <Objective text={profile.objective}>
          {(_, text) => (
            <Card>
              <p className='text-xs text-on-primary'>{text}</p>
            </Card>
          )}
        </Objective>

        <PersonalDetails personalDetails={profile.personalDetails}>
          {(p) => (
            <Card style={{ margin: '4px 0' }} title='Contact'>
              <UserInfoWithIcon containerClasses='flex flex-col gap-y-2 mt-1' data={p} renderItem={ContactListItem} />
            </Card>
          )}
        </PersonalDetails>

        <Skills items={profile.skills}>
          {(title, items) => (
            <Card title={title}>
              <PillList items={items} />
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

export default TemplateY
