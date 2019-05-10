import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
  <Layout>
    <SEO title="404: Not found" />
    <h1>{t('notFound.title')}</h1>
    <p>{t('notFound.text')}</p>
  </Layout>
)
}

export default NotFoundPage
