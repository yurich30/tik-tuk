export interface IVideos {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: AuthorMeta;
  musicMeta: MusicMeta;
  covers: Covers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: VideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: number;
  mentions: [];
  hashtags: [];
  effectStickers: EffectStickers[];
}

interface MusicMeta {
  musicId: string;
  musicName: string;
  musicAuthor: string;
  musicOriginal: boolean;
  musicAlbum: string;
  playUrl: string;
  coverThumbs: string;
  coverMedium: string;
  coverLarge: string;
  duration: number;
}

interface AuthorMeta {
  id: string;
  secUid: string;
  name: string;
  nickName: string;
  verified: boolean;
  signature: string;
  avatar: string;
  following: number;
  fans: number;
  heart: number;
  video: number;
  digg: number;
}

interface Covers {
  default: string;
  origin: string;
  dynamic: string;
}

interface EffectStickers {
  id: string;
  name: string;
}

interface VideoMeta {
  height: number;
  width: number;
  duration: number;
}
