/**
 * Created by RFreeman on 2/9/2017.
 */

// use jQuery for a Delete confirmation pop-up
$('.confirmation').on('click', function() {
    return confirm('Are you sure you want to delete this item?');
});
