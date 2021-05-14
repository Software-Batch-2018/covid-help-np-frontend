import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonComponent = () => {
  return (
    <div>
      <SkeletonTheme color="#f2f2f2" highlightColor="#dbd9d9">
        <section>
          <Skeleton circle={true} height={50} width={50} />
          <Skeleton count={6} height={20} />
        </section>
      </SkeletonTheme>
      <SkeletonTheme color="#e6e6e6" highlightColor="#dbd9d9">
        <section>
          <Skeleton circle={true} height={50} width={50} className="mt-5" />
          <Skeleton count={6} height={20} />
        </section>
      </SkeletonTheme>
      <SkeletonTheme color="#e6e6e6" highlightColor="#dbd9d9">
        <section>
          <Skeleton circle={true} height={50} width={50} className="mt-5" />
          <Skeleton count={6} height={20} />
        </section>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonComponent;
