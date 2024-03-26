// mystatusで使用
interface mystatus {
    Name : string, // 名前
    Id: string, // ID
    GuildName: string, //ギルド
    AllianceName: string, // 同盟
    DeathFame: number, // 死の名声
    KillFame: number, // 殺した名声
    LifetimeStatistics: {
      PvE: {            // mob退治名声
        Total: number, 
        Royal: number,
        Outlands: number,
        Avalon: number,
        Hellgate: number,
        CurruptedDungeon: number,
        Mists: number,
      },
      Gathering: { //採集系統
        Fiber: { // 綿
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        },
        Hide: { // 皮
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        },
        Ore: { // 鉱石
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        },
        Rock: { // 石
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        },
        Wood: { // 木
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        },
        All: { //合計
          Total: number,
          Royal: number,
          Outlands: number,
          Avalon: number,
        }
      },
      Crafting: { //制作
        Total: number,
        Royal: number,
        Outlands: number,
        Avalon: number,
      }
      CrystalLeague: number, // クリスタルリーグ
      FishingFame: number, // 釣り名声
      FarmingFame: number, // 農業の名声
      Timestamp: number, // 多分更新日時
  }
}

// name検索で使用
interface guilds {
  Name: string
}
interface Player {
    Id: string;
    Name: string;
    GuildId: string;
    GuildName: string | null;
    AllianceId: string;
    AllianceName: string | null;
    Avatar: string;
    AvatarRing: string;
    KillFame: number;
    DeathFame: number;
    FameRatio: number;
    totalKills: number | null;
    gvgKills: number | null;
    gvgWon: number | null;
  }

  interface Dammy {}
  
  interface ApiResponse {
    guilds: any[]; 
    players: Player[];
  }
  