
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
  const infoClasses = 'bg-gray-200 p-4 rounded-md mb-6 text-md h-[60px] truncate'

  return (
    <div className="flex flex-col bg-white justify-center px-7 py-10 max-w-[440px] w-full shadow-md rounded-md mx-2">
      <div className="flex flex-col">
        <span className="mb-4 text-lg self-center">Profile Picture</span>
        <div className="relative self-center w-24 h-24 mb-8">
          <img src={avatar || placeHolder} alt="B2bit's logo" className="absolute h-full w-full object-cover rounded-md" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className={labelClasses}>Your <strong>Name</strong></span>
        <span className={infoClasses}>{fullName}</span>
        <span className={labelClasses}>Your <strong>E-mail</strong></span>
        <span className={infoClasses}>{email}</span>
      </div>
    </div>
    )
}
