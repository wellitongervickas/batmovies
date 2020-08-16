export default function section() {
  return [
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Type your email',
      validations: [
        {
          type: 'blank',
        },
        {
          type: 'email',
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
        {
          type: 'lessThan',
          count: 16,
        },
        {
          type: 'greaterThan',
          count: 8,
        },
      ],
    },
  ]
}
