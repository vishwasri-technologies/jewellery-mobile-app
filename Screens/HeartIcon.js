// import React, { useState } from 'react';
// import { TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWishlist } from './WishlistContext';

// const HeartIcon = ({ item, iconStyle }) => {
//   const { wishlist, toggleWishlist } = useWishlist();
//   const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

//   // State for Popup visibility
//   const [popupVisible, setPopupVisible] = useState(false);

//   // Handle Wishlist Toggle
//   const handleToggle = () => {
//     // Toggle the item in the wishlist
//     toggleWishlist(item);
//     setPopupVisible(true);

//     // Hide popup after 1.5 seconds
//     setTimeout(() => {
//       setPopupVisible(false);
//     }, 1500);
//   };

//   return (
//     <>
//       {/* Wishlist Heart Icon */}
//       <TouchableOpacity onPress={handleToggle} style={[styles.heartContainer, iconStyle]}>
//         {/* Change heart color based on wishlist status */}
//         <Icon name="heart" size={20} color={isInWishlist ? 'red' : 'gray'} />
//       </TouchableOpacity>

//       {/* Popup Notification */}
//       <Modal transparent visible={popupVisible} animationType="fade">
//         <View style={styles.popupContainer}>
//           <View style={styles.popup}>
//             <Text style={styles.popupText}>
//               {isInWishlist
//                 ? `${item.name} has been added to wishlist`
//                 : `${item.name} has been removed from wishlist`}
//             </Text>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   heartContainer: { position: 'absolute', top: 14, right: 9, zIndex: 10 },

//   // Popup Styles
//   popupContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0)', // Fully transparent background
//   },
//   popup: {
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 70, // Position it at the bottom
//   },
//   popupText: { fontSize: 14, color: 'white', fontWeight: 'bold' },
// });

// export default HeartIcon;









import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useWishlist } from './WishlistContext';

const HeartIcon = ({ item, iconStyle }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

  // State for Popup visibility
  const [popupVisible, setPopupVisible] = useState(false);

  // Handle Wishlist Toggle
  const handleToggle = () => {
    toggleWishlist(item);
    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 1500);
  };

  return (
    <>
      {/* Heart Icon with Black Outline Effect */}
      <TouchableOpacity onPress={handleToggle} style={[styles.heartContainer, iconStyle]}>
        <View style={styles.iconStack}>
          {/* Black Outline Heart (Slightly Bigger) */}
          <Icon name="heart" size={22} color="black" style={styles.iconOutline} />

          {/* Colored Heart (Smaller & On Top) */}
          <Icon name="heart" size={20} color={isInWishlist ? 'red' : 'white'} style={styles.iconFilled} />
        </View>
      </TouchableOpacity>

      {/* Popup Notification */}
      <Modal transparent visible={popupVisible} animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>
              {isInWishlist
                ? `${item.name} has been added to wishlist`
                : `${item.name} has been removed from wishlist`}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    top: 14,
    right: 9,
    zIndex: 10,
  },
  iconStack: {
    position: 'relative', 
    width: 22, // Size of the outer heart
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOutline: {
    position: 'absolute',
  },
  iconFilled: {
    position: 'absolute',
  },
  // Popup Styles
  popupContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  popup: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 70,
  },
  popupText: { fontSize: 14, color: 'white', fontWeight: 'bold' },
});

export default HeartIcon;
