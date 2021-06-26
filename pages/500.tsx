import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/common/Button';
import SubscribeCard from '../components/common/SubscribeCard';
import Text from '../components/common/Text';
import LatestIssues from '../components/LatestIssues';
import Layout, { siteConfig } from '../components/Layout';
import Meta from '../interfaces/meta';
import { getAllIssuesMeta, issueAPI } from '../lib/issues';
import { useThemeState } from '../theme/ThemeContext';

export default function Custom500({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element {
  const theme = useThemeState();
  return (
    <Layout additionalStyles={`pt-4 bg-hero bg-${theme}-500`} title={`${siteConfig.name} | Server-side error occurred`}>
      <Head>
        <title>{`${siteConfig.name} - Server-side error occurred`}</title>
      </Head>
      <section className={`h-80 py-12 flex flex-col justify-center items-center text-lg`}>
        <Text color={`text-${theme}-100`} additionalStyles="text-6xl" type="h1">
          404
        </Text>
        <Text color={`text-${theme}-200`} additionalStyles="text-4xl" type="h3">
          Server-side error occurred
        </Text>
        <Text color={`text-${theme}-100`} additionalStyles="py-4 text-2xl">
          Read our latest issues while you are here.
        </Text>
        <Text color={`text-${theme}-100`} additionalStyles="text-2xl pb-4">
          or
        </Text>
        <Link href="/">
          <a>
            <Button size="md" type="secondary">
              ← Go to home
            </Button>
          </a>
        </Link>
      </section>
      <section className={`mx-auto px-8 sm:px-16 md:px-40 lg:px-64 text-lg leading-normal pt-2 pb-8 bg-${theme}-100`}>
        <LatestIssues allIssuesData={allIssuesData} />
      </section>
      <section className={`py-12 flex items-center justify-center bg-${theme}-100`}>
        <SubscribeCard />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await issueAPI.limitedIssuesReversed();
  return {
    props: {
      allIssuesData: getAllIssuesMeta(data),
    },
    revalidate: 180,
  };
};
