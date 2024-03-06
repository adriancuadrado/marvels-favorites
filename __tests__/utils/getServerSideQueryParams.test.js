import getServerSideQueryParams from '@/utils/getServerSideQueryParams';

// Mocking the createHash function
jest.mock('node:crypto', () => ({
  createHash: jest.fn(() => ({
    update: jest.fn(),
    digest: jest.fn(() => 'mocked-hash'),
  })),
}));

describe('getServerSideQueryParams', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('generates timestamp and hash correctly', () => {
    // Mocking environment variables
    process.env.PRIVATE_KEY = 'private_key';
    process.env.NEXT_PUBLIC_KEY = 'public_key';

    // Call the function
    const params = getServerSideQueryParams();

    // Assert the timestamp and hash
    expect(params.ts).toBe(0); // Initial timestamp should be 0
    expect(params.hash).toBe('mocked-hash');
    expect(require('node:crypto').createHash).toHaveBeenCalledWith('md5');
  });

  test('increments timestamp with subsequent calls', () => {
    // Mocking environment variables
    process.env.PRIVATE_KEY = 'private_key';
    process.env.NEXT_PUBLIC_KEY = 'public_key';

    // Call the function twice
    getServerSideQueryParams();
    const params2 = getServerSideQueryParams();

    // Assert the timestamp has been incremented
    expect(params2.ts).toBe(2);
  });
});
