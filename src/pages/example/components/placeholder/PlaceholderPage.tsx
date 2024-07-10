import Card from "../../../../components/card/Card";
import SkeletonListLoading from "../../../../components/skeleton/SkeletonListLoading";
import SkeletionTable from "../../../../components/skeleton/SkeletonTable";

const PlaceholderPage = () => {
    return (
      <div className="space-y-5">
        <Card title="Example One">
          <SkeletionTable count={3} />
        </Card>
        <Card title="Example Two">
          <SkeletionTable count={3} />
        </Card>
        <Card title="Example Three">
          <SkeletonListLoading count={3} />
        </Card>
      </div>
    );
  };

  export default PlaceholderPage;
