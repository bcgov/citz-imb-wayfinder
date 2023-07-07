/**
 * @desc Type declaration for User account
 * @author LocalNewsTV
 */
type User = {
  username: string;
  password: string;
  email: string;
  admin?: boolean;
};

export default User;
