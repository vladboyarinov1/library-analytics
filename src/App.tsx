import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { searchPageData, visualizationData } from '@/common/data'
import { useAppSelector } from '@/common/hooks/use-app-selector'
import { useWindowSize } from '@/common/hooks/use-window-size'
import { ErrorSnackbar } from '@/components/ui/components/error-snackbar'
import { PagesFooter } from '@/components/ui/components/footer'
import { MainHeader } from '@/components/ui/components/header/header'
import { Sidebar } from '@/components/ui/components/sidebar'
import { AboutSearch } from '@/components/ui/pages/about-search'
import { Dynamics } from '@/components/ui/pages/dynamics'
import { EditionsPubKeyAnalysisApi } from '@/components/ui/pages/editions-pub-key-analysis-api/ui'
import { ErrorPage } from '@/components/ui/pages/error-page'
import { KeywordNetwork } from '@/components/ui/pages/keyword-network'
import { OrgAnalysis } from '@/components/ui/pages/org-analysis'
import { PresentationPage } from '@/components/ui/pages/presentation-page/presentation-page'
import { PublicationsKeywords } from '@/components/ui/pages/publications-keywords'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const url = useAppSelector(state => state.breadCrumbs.breadcrumbPath)

  const { width } = useWindowSize()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const currentPath = location.pathname
  const isMobile = width && width <= 730
  const isPathNotInSearchPages =
    currentPath !== '/about_search' &&
    currentPath !== '/data_search' &&
    currentPath !== '/visualization'

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        minHeight: '100vh',
      }}
    >
      {isPathNotInSearchPages ? (
        isMobile ? (
          <MainHeader />
        ) : (
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        )
      ) : null}
      <Layout
        style={{
          backgroundColor: 'var(--color-green-desaturated)',
          marginLeft: `${
            isMobile
              ? '0'
              : collapsed && isPathNotInSearchPages
              ? '80px'
              : !isPathNotInSearchPages
              ? '0'
              : '250px'
          }`,
          marginTop: `${isMobile && isPathNotInSearchPages ? '30px' : 0}`,
          // overflowY: 'auto',
        }}
      >
        <Content style={{ flex: '1 0 auto', overflow: 'initial' }}>
          {isPathNotInSearchPages ? (
            <Breadcrumb
              items={url.map((i: string) => ({ title: i }))}
              separator={'>'}
              style={{
                fontSize: 16,
                margin: '40px 0 20px 20px',
              }}
            />
          ) : (
            ''
          )}
          <div>
            <Routes>
              <Route element={<AboutSearch />} path={'/about_search'} />
              <Route
                element={
                  <PresentationPage
                    timelineItems={searchPageData}
                    title={'Наукометрические показатели'}
                  />
                }
                path={'/data_search'}
              />
              <Route
                element={
                  <PresentationPage
                    timelineItems={visualizationData}
                    title={'Аналитика и визуализация'}
                  />
                }
                path={'/visualization'}
              />
              <Route element={<Navigate to={'/about_search'} />} path={'/'} />
              <Route element={<OrgAnalysis />} path={'/analysis_publications'} />
              <Route element={<Dynamics />} path={'/dynamics'} />
              <Route element={<PublicationsKeywords />} path={'/publications_by_keywords'} />
              <Route
                element={<EditionsPubKeyAnalysisApi />}
                path={'/analysis_publications_and_keywords'}
              />
              <Route element={<KeywordNetwork />} path={'/keyword_network'} />
              <Route element={<ErrorPage />} path={'/404'} />
              <Route element={<Navigate to={'/404'} />} path={'*'} />
            </Routes>
          </div>
        </Content>
        {isPathNotInSearchPages && <PagesFooter />}
      </Layout>
      <ErrorSnackbar />
    </Layout>
  )
}
