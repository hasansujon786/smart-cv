import { userInfoIcons } from './template_icons'

const UserInfoWithIcon = ({ data, renderItem: Item, containerStyle, containerClasses = '' }) => (
  <div className={containerClasses} style={containerStyle}>
    {Object.keys(userInfoIcons).map((key) => {
      return data[key] && <Item value={data[key]} icon={userInfoIcons[key]} key={key} />
    })}
  </div>
)
export default UserInfoWithIcon

export const ContactListItem = ({ icon, value }) => (
  <div className='flex gap-x-2'>
    <div>
      <div className='contact-icon-color w-4 h-4'>{icon}</div>
    </div>
    <p className='text-xs text-neutral'>{value}</p>
  </div>
)
