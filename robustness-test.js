const { discoverNotes } = require('./lib/noteDiscovery.ts');

function runRobustnessTest() {
  console.log('🔍 Running comprehensive robustness test...\n');
  
  const notes = discoverNotes();
  
  // Test 1: Check for duplicates
  console.log('1️⃣ Testing for duplicates...');
  const titleAuthorMap = new Map();
  let duplicates = 0;
  const duplicateList = [];
  
  notes.forEach(note => {
    if (note.category === 'book' || note.category === 'podcast') {
      const key = `${note.title.toLowerCase()}::${note.author.toLowerCase()}`;
      if (titleAuthorMap.has(key)) {
        duplicates++;
        duplicateList.push(`${note.title} by ${note.author}`);
      } else {
        titleAuthorMap.set(key, note);
      }
    }
  });
  
  console.log(`   Duplicates found: ${duplicates}`);
  if (duplicates > 0) {
    console.log('   Duplicate list:', duplicateList);
  }
  
  // Test 2: Check categorization distribution
  console.log('\n2️⃣ Testing categorization...');
  const categories = {};
  notes.forEach(note => {
    categories[note.category] = (categories[note.category] || 0) + 1;
  });
  
  console.log('   Category distribution:');
  Object.entries(categories).forEach(([category, count]) => {
    console.log(`     ${category}: ${count}`);
  });
  
  // Test 3: Check for invalid categories
  console.log('\n3️⃣ Testing category validity...');
  const validCategories = ['book', 'course', 'podcast', 'video', 'essay', 'documentary'];
  const invalidCategories = notes.filter(note => 
    !validCategories.includes(note.category)
  );
  
  console.log(`   Invalid categories: ${invalidCategories.length}`);
  if (invalidCategories.length > 0) {
    console.log('   Invalid category notes:', invalidCategories.map(n => `${n.title} - ${n.category}`));
  }
  
  // Test 4: Check for missing required fields
  console.log('\n4️⃣ Testing required fields...');
  const missingFields = notes.filter(note => 
    !note.title || !note.author || !note.category || !note.slug
  );
  
  console.log(`   Notes with missing fields: ${missingFields.length}`);
  if (missingFields.length > 0) {
    console.log('   Missing field notes:', missingFields.map(n => `${n.slug} - missing: ${!n.title ? 'title' : ''} ${!n.author ? 'author' : ''} ${!n.category ? 'category' : ''} ${!n.slug ? 'slug' : ''}`));
  }
  
  // Test 5: Check for empty or malformed content
  console.log('\n5️⃣ Testing content quality...');
  const emptyContent = notes.filter(note => 
    !note.content || note.content.trim().length < 10
  );
  
  console.log(`   Notes with empty/poor content: ${emptyContent.length}`);
  if (emptyContent.length > 0) {
    console.log('   Empty content notes:', emptyContent.map(n => `${n.title} (${n.slug})`));
  }
  
  // Test 6: Performance test
  console.log('\n6️⃣ Testing performance...');
  const startTime = Date.now();
  const notes2 = discoverNotes(); // Should use cache
  const endTime = Date.now();
  
  console.log(`   Cache performance: ${endTime - startTime}ms (should be < 50ms)`);
  console.log(`   Notes consistency: ${notes.length === notes2.length ? 'PASS' : 'FAIL'}`);
  
  // Summary
  console.log('\n📊 ROBUSTNESS SUMMARY:');
  console.log(`   Total notes: ${notes.length}`);
  console.log(`   Duplicates: ${duplicates === 0 ? '✅ NONE' : '❌ FOUND'}`);
  console.log(`   Invalid categories: ${invalidCategories.length === 0 ? '✅ NONE' : '❌ FOUND'}`);
  console.log(`   Missing fields: ${missingFields.length === 0 ? '✅ NONE' : '❌ FOUND'}`);
  console.log(`   Empty content: ${emptyContent.length === 0 ? '✅ NONE' : '❌ FOUND'}`);
  console.log(`   Cache performance: ${endTime - startTime < 50 ? '✅ GOOD' : '❌ SLOW'}`);
  
  const allTestsPass = duplicates === 0 && invalidCategories.length === 0 && missingFields.length === 0;
  console.log(`\n🎯 OVERALL STATUS: ${allTestsPass ? '✅ ROBUST' : '❌ NEEDS ATTENTION'}`);
  
  return allTestsPass;
}

runRobustnessTest();
