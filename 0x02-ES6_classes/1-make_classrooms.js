import ClassRoom from './0-classroom';

export default function initializeRooms() {
  [19, 20, 34].map((size) => new ClassRoom(size));
}
