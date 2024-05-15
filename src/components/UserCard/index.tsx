
import placeHolder from '../../assets/placeholder.svg';

type UserCardProps = {
  userInfo: Record<string, unknown >;

}

export default function UserCard(props: UserCardProps): JSX.Element {
  const { userInfo } = props;
  const avatarInfo = userInfo.avatar as Record<string, unknown > | null;
  const avatar = avatarInfo?.image_high_url as string | null;
  const fullName = [userInfo.name, userInfo.last_name].join(' ');
  const email = userInfo.email as string;

  const labelClasses = 'mb-2 text-lg';
  const infoClasses = 'bg-gray-200 p-4 rounded-md mb-6 text-md h-[60px]'

  return (
    <div className="flex flex-col bg-white justify-center px-7 py-10 max-w-[440px] w-full shadow-md rounded-md">
      <div className="flex flex-col">
        <span className="mb-4 text-lg self-center">Profile Picture</span>

        <img src={avatar || placeHolder} alt="B2bit's logo" className="w-full object-contain w-20 h-20 mb-8 self-center rounded-md" />
      </div>

      <div className="flex flex-col">
        <span className={labelClasses}>Your <strong>Name</strong></span>
        <span className={infoClasses}>{fullName || 'a'}</span>
        <span className={labelClasses}>Your <strong>E-mail</strong></span>
        <span className={infoClasses}>{email || 'a'}</span>
      </div>
    </div>
    )
}
