import { GetStaticPaths, GetStaticProps } from 'next';

import ArticleItem from '../../components/ArticleItem';
import Button from '../../components/common/Button';
import CodeSnippet from '../../components/common/CodeSnippet';
import DevOfTheWeekItem from '../../components/DevOfTheWeekItem';
import Head from 'next/head';
import { Issue } from '../../interfaces/issue';
import IssueItem from '../../components/IssueItem';
import Layout from '../../components/layout';
import SubscribeCard from '../../components/common/SubscribeCard';
import Text from '../../components/common/Text';
import { getAllIssueIds } from '../../lib/issues';
import issues from '../../issues/issues';
import Quiz from '../../components/Quiz';

// import utilStyles from "../../styles/utils.module.css";

// SyntaxHighlighter.registerLanguage('jsx', jsx);

export default function IssueComponent({ issueData }: { issueData: Issue }): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{issueData.meta.title}</title>
      </Head>
      <IssueItem title="Tip of the day">
        <Text type="base" additionalStyles="my-2">
          {issueData.tipOfTheWeek.desc}
        </Text>
        <CodeSnippet snippet={issueData.tipOfTheWeek.snippet} />
      </IssueItem>
      <IssueItem title="Articles">
        {issueData.articles.map(article => (
          <ArticleItem article={article} key={article.url} />
        ))}
      </IssueItem>
      <IssueItem title="Dev Of The Week">
        <DevOfTheWeekItem devOfTheWeek={issueData.devOfTheWeek} />
      </IssueItem>
      <IssueItem title="Quiz">
        <Quiz quiz={issueData.quiz} />
      </IssueItem>
      <SubscribeCard />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIssueIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const index: number = ((params.id as unknown) as number) - 1;
  const issueData: Issue = issues[index];
  return {
    props: {
      issueData,
    },
  };
};
