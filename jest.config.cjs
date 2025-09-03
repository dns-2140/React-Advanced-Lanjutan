module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // ignore CSS
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js", // fake images
  },
};
