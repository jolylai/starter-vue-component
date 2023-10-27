import antfu from '@antfu/eslint-config'

export default antfu(
  undefined,
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      'symbol-description': 'off',
    },
  },
)
