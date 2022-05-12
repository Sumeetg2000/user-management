import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
export const validationSchema=Yup.object({
    userImage:Yup
      .mixed()
      .nullable()
      .required('Required')
      .test('file size','Image size should be less than 2mb', (value) =>(value && value.size <= 2000000))
      .test('format','Image can only be type of jpg or png', (value) => (value && SUPPORTED_FORMATS.includes(value.type))),
    userName:Yup.string()
        .required('Required')
        .max(15,'Must be 15 character or less'),
    userEmail:Yup
        .string()
        .email('Please enter valid email address')
        .required('Required'),
    userPhoneNo:Yup
        .string()
        .matches(/^[6-9][0-9]{9}$/,"Only Indian phone no. is valid!")
        .required('Required'),
    userPassword:Yup
        .string()
        .required('Required'),
    confirmPassword:Yup
        .string()
        .oneOf([Yup.ref('userPassword'), null], "Password does not match")
        .required('Required'),
});