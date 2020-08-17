export default function section() {
  return [
    {
      id: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Type your username',
      validations: [
        {
          type: 'blank',
        },
      ],
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Type your password',
      validations: [
        {
          type: 'blank',
        },
      ],
    },
  ]
}
