import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CryptoCurrencyGridSkeleton() {
  return (
    <SkeletonTheme color="#6B7280" highlightColor="#818896">
      <div className="grid grid-cols-3 gap-4 py-3">
        {Array(3).fill(<Skeleton count={1} className="h-60" />)}
      </div>
    </SkeletonTheme>
  );
}
