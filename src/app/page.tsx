import Link from "next/link";
import Card from "./components/Card";
import ListProfiles from "./components/ListProfiles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white gap-5">
      <div className="text-5xl underline underline-offset-[12px]">My Hobby</div>
      <div className="flex gap-5">
        <Card title={"漫画&アニメ"}>
          <ListProfiles items={["ジョジョ", "俺ガイル", "SAO", "響け！ユーフォニアム", "ガールズバンドクライ"]} />
        </Card>
        <Card title={"運動"}>
          <ListProfiles items={["バドミントン", "ダーツ"]} />
        </Card>
        <Card title={"ゲーム"}>
          <ListProfiles items={["ポケモンSV", "ドッカンバトル", "ガールズバンドパーティー"]} />
        </Card>
      </div>
      <Link href="/">Homeへ</Link>
    </div>
  );
}
