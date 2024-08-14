import { Suspense, useEffect, useState } from "react";
import Error404Page from "../../pages/error/Error404Page";

const DynamicComponent = ({ componentPath }: { componentPath: string }) => {
  const [Component, setComponent] = useState<React.ElementType | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const { default: loadedComponent } = await import(
          `../../pages/${componentPath}`
        );
        setComponent(() => loadedComponent);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      }
    };
    loadComponent();
  }, [componentPath]);

  if (hasError) {
    return <Error404Page />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </Suspense>
  );
};

export default DynamicComponent;
