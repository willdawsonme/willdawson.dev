import React from 'react'
import Text from './components/Text';
import TextLink from './components/TextLink';
import Avatar from './Avatar.png';

const App = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-10 animate-appear">
        <header className="pt-8">
          <img src={Avatar} className="avatar rounded-full w-40 h-40 mb-8" />
          <div className="space-y-4">
            <Text as="h1" className="text-4xl font-extrabold dark:text-gray-100">Will Dawson</Text>
            <Text as="p" className="text-2xl text-gray-500 dark:text-gray-400">I'm an experienced full-stack engineer based in Sydney, Australia who has developed products that reach millions of users every day. I'm passionate about building great products that make a difference.</Text>
          </div>
        </header>
        <hr className="w-20 mt-8 mb-8 border-gray-300 dark:border-gray-700" />
        <main>
          <div className="flex flex-wrap flex-row items-center font-mono">
            <TextLink href="https://github.com/willdawsonme" className="mb-2">Github</TextLink>
            <Text className="mx-2 mb-2 sm:mx-4 text-gray-500">&middot;</Text>
            <TextLink href="https://www.linkedin.com/in/willdawsonme" className="mb-2">Linkedin</TextLink>
            <Text className="mx-2 mb-2 sm:mx-4 text-gray-500">&middot;</Text>
            <TextLink href="https://twitter.com/willdawson" className="mb-2">Twitter</TextLink>
            <Text className="mx-2 mb-2 sm:mx-4 text-gray-500">&middot;</Text>
            <TextLink href="https://dribbble.com/willdawson" className="mb-2">Dribbble</TextLink>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App
